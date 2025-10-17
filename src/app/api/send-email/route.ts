import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

function sanitize(input: unknown, maxLen = 4000): string {
  if (typeof input !== "string") return "";
  const s = input.trim();
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const first_name = sanitize(body?.first_name, 100);
    const last_name = sanitize(body?.last_name, 100);
    const email = sanitize(body?.email, 200);
    const company = sanitize(body?.company, 200);
    const country_code = sanitize(body?.country_code, 10);
    const phone = sanitize(body?.phone, 30);
    const message = sanitize(body?.message, 4000);

    const errors: Record<string, string> = {};
    if (!first_name) errors.first_name = "First name is required";
    if (!last_name) errors.last_name = "Last name is required";
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Invalid email";
    if (!message || message.length < 10) errors.message = "Message too short";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const subject = `New Contact: ${first_name} ${last_name} (${
      company || "No company"
    })`;
    const to = process.env.SMTP_USER;
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Recipient not configured" },
        { status: 500 }
      );
    }

    const html = `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${first_name} ${last_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "—"}</p>
      <p><strong>Phone:</strong> ${country_code || ""} ${phone || ""}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;
    const text = `Name: ${first_name} ${last_name}
Email: ${email}
Company: ${company || "—"}
Phone: ${country_code || ""} ${phone || ""}
---
${message}`;

    const result = await sendEmail({ to, subject, html, text, from: to });

    return NextResponse.json({ ok: true, result }, { status: 200 });
  } catch (err) {
    console.error("send-email error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
