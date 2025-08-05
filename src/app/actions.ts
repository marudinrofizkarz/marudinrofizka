"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid fields provided.",
    };
  }
  
  // In a real application, you would integrate an email service here.
  // For example, using Nodemailer, Resend, or SendGrid.
  console.log("Received contact form submission:", validatedFields.data);

  // Simulate a successful submission
  return {
    success: true,
  };
}
