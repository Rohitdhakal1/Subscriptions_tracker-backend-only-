// Professional email layout generator
const createEmailLayout = ({ title, message, color, name, plan, renewalDate, paymentMethod }) => `
  <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; padding: 50px 20px; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <div style="background-color: ${color}; padding: 40px 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">${title}</h1>
      </div>

      <!-- Content -->
      <div style="padding: 40px 30px;">
        <p style="font-size: 16px; line-height: 1.6; color: #555; margin-top: 0;">Hello,</p>
        <p style="font-size: 16px; line-height: 1.6; color: #555;">${message}</p>
        
        <!-- Data Table -->
        <table style="width: 100%; border-collapse: collapse; margin: 30px 0; background-color: #fcfcfc; border-radius: 12px; border: 1px solid #f0f0f0;">
          <tr>
            <td style="padding: 20px; border-bottom: 1px solid #f0f0f0;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 4px;">Subscription</span>
              <span style="font-size: 20px; font-weight: 700; color: #111;">${name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; border-bottom: 1px solid #f0f0f0;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 4px;">Plan / Category</span>
              <span style="font-size: 18px; font-weight: 600; color: #333;">${plan}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; border-bottom: 1px solid #f0f0f0;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 4px;">Payment Method</span>
              <span style="font-size: 18px; font-weight: 600; color: #333;">${paymentMethod}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 4px;">Renewal Date</span>
              <span style="font-size: 18px; font-weight: 600; color: #e63946;">${renewalDate}</span>
            </td>
          </tr>
        </table>

        <div style="text-align: center; margin-top: 20px;">
          <a href="#" style="background-color: ${color}; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">Manage Subscription</a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f4f4f4; padding: 25px; text-align: center; font-size: 13px; color: #888; border-top: 1px solid #eee;">
        <p style="margin: 0;">This is an automated reminder from your Subscription Manager.</p>
        <p style="margin: 5px 0 0 0;">© 2026 Subscription Inc. All rights reserved.</p>
      </div>
    </div>
  </div>
`;

// main template
export const emailTemplate = [
  {
    label: 7,
    subject: "Upcoming Subscription Renewal",
    html: (data) =>
      createEmailLayout({
        ...data,
        title: "Upcoming Renewal",
        message:
          "We’re keeping you informed — your subscription is set to renew in 7 days. You can check the details now if you’re planning to continue or cancel.",
        color: "#2ecc71", // Green
      }),
  },
  {
    label: 5,
    subject: "Reminder: Subscription Renewal",
    html: (data) =>
      createEmailLayout({
        ...data,
        title: "Renewal Reminder",
        message:
          "Your subscription is set to renew in 5 days. We’re keeping you informed so you can review or decide if you want to continue.",
        color: "#3498db", // Blue
      }),
  },
  {
    label: 2,
    subject: "⚠️ Urgent: Subscription Renewal",
    html: (data) =>
      createEmailLayout({
        ...data,
        title: "Urgent: Renewal Soon",
        message:
          "Only 2 days left until your subscription renews. This is an urgent reminder to verify your subscription details and decide if you want to continue.",
        color: "#f39c12", // Orange
      }),
  },
  {
    label: 1,
    subject: "🚨 Final Reminder: Subscription Renewal",
    html: (data) =>
      createEmailLayout({
        ...data,
        title: "Final Reminder",
        message:
          "Your subscription renews tomorrow! This is your final reminder before the renewal process begins.",
        color: "#e74c3c", // Red
      }),
  },
  {
    label: 0,
    subject: "Renewal Confirmation",
    html: (data) =>
      createEmailLayout({
        ...data,
        title: "Renewal Today",
        message:
          "Your subscription is renewing today. We're processing your renewal to ensure your service continues without interruption.",
        color: "#9b59b6", // Purple
      }),
  },
];
