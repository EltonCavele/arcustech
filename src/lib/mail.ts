// lib/mail.ts
import nodemailer from "nodemailer";

type SendEmailParams = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

const transporter = nodemailer.createTransport({
  host: requireEnv("SMTP_HOST"),
  port: Number(requireEnv("SMTP_PORT")),
  secure: requireEnv("SMTP_SECURE") === "true",
  auth: {
    user: requireEnv("SMTP_USER"),
    pass: requireEnv("SMTP_PASS"),
  },
});

export async function sendEmail({
  to,
  subject,
  text,
  html,
  from,
}: SendEmailParams) {
  if (!to || !subject || (!text && !html)) {
    throw new Error(
      "Invalid email payload: to, subject and text/html are required."
    );
  }

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });

  return {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  };
}
