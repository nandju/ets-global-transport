"use server";

import { EmailTemplateTP } from "@/emails/email-template-t-p";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = String(formData.get("name"));
  const lastname = String(formData.get("lastname"));
  const email = String(formData.get("email"));
  const phone = String(formData.get("phone"));
  const startDate = String(formData.get("startDate"));
  const endDate = String(formData.get("endDate"));
  const travauxTypes = String(formData.get("travauxTypes"));

  console.log(process.env.RESEND_API_KEY);
 
  try {
    const { data, error } = await resend.emails.send({
      from: "ETS-TEST <onboarding@resend.dev>",
      to: [email],
      subject: "ETS GLOBAL TRANSPORT",
      react: EmailTemplateTP({ name, lastname, email, phone, startDate, endDate, travauxTypes }),
    });

    if (error) {
      throw new Error("Email non envoyé");
    }

    return data;
  } catch (error) {
    return { status: 500, message: error };
  }
}
