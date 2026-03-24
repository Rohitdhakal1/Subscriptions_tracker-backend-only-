import { emailTemplate } from "./email.template.js";
import { transporter, accountEmail } from "../config/nodemailer.js";
import dayjs from "dayjs";

export const sendReminderEmail = async ({ to, type, subscription }) => {
  if (!to || type === undefined) {
    throw new Error("Missing required parameters");
  }
  console.log("📧 Sending email to:", to);
  console.log("Type:", type);

  // find template
  const template = emailTemplate.find((t) => t.label === type);
  if (!template) throw new Error("Invalid email type");

  // prepare data (match template keys)
  const data = {
    name: subscription.name,
    plan: subscription.category,
    renewalDate: dayjs(subscription.renewalDate).format("MMM D, YYYY"),
    paymentMethod: subscription.paymentMethod,
  };

  // generate email
  const html = template.html(data);
  const subject = template.subject;

  // send email
  try {
    const info = await transporter.sendMail({
      from: accountEmail,
      to,
      subject,
      html,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.log("Error sending email:", error.message);
  }
};
