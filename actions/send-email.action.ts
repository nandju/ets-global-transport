"use server";

import { EmailTemplate } from "@/emails/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));
  try {
    const { data, error } = await resend.emails.send({
      from: "ETS-TEST <onboarding@resend.dev>",
      to: [email],
      subject: "ETS GLOBAL TRANSPORT",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      throw new Error("Email non envoyé");
    }

    return data;
  } catch (error) {
    return { status: 500, message: error };
  }
}
