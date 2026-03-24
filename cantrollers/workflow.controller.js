import { serve } from "@upstash/workflow/express";
import dayjs from "dayjs";
import Subscription from "../models/subscription.model.js";
import { sendReminderEmail } from "../utils/send-email.js";

// match your templates
const REMINDERS = [7, 5, 2, 1];

export const sendReminders = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  console.log(`Workflow started for subscription: ${subscriptionId}`);

  const subscription = await fetchSubscription(context, subscriptionId);

  if (!subscription || subscription.status !== "active") {
    console.log(`Subscription ${subscriptionId} not found or not active`);
    return;
  }

  const renewalDate = dayjs(subscription.renewalDate);

  if (renewalDate.isBefore(dayjs())) {
    console.log(
      `Renewal date ${renewalDate.format("YYYY-MM-DD")} has passed for subscription ${subscriptionId}, stopping workflow`,
    );
    return;
  }

  for (const daysBefore of REMINDERS) {
    const reminderDate = renewalDate.subtract(daysBefore, "day");

    if (reminderDate.isBefore(dayjs())) {
      console.log(
        `Reminder for ${daysBefore} days before is in the past (${reminderDate.format("YYYY-MM-DD")}), skipping.`,
      );
    }

    if (reminderDate.isAfter(dayjs())) {
      //comment first await to that you can check email is working or not as it trigger to send email immediately
      await sleepUntilReminder(
        context,
        `Reminder ${daysBefore} days before`,
        reminderDate,
      );

      await triggerReminder(
        context,
        `Reminder ${daysBefore} days before`,
        subscription,
        daysBefore,
      );
    }
  }
});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", async () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(`Sleeping until ${label} at ${date}`);
  await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label, subscription, daysBefore) => {
  return await context.run(label, async () => {
    console.log(`Triggering ${label} reminder for ${subscription.user.email}`);

    await sendReminderEmail({
      to: subscription.user.email,
      type: daysBefore,
      subscription,
    });

    console.log(`Email sent for ${label}`);
  });
};
