'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

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
      message: 'Invalid fields provided.',
    };
  }

  const { name, email, message } = validatedFields.data;
  const submission = {
    name,
    email,
    message,
    submittedAt: new Date().toISOString(),
  };

  try {
    const submissionsFilePath = path.join(process.cwd(), 'contact-submissions.json');
    let submissions = [];

    try {
      // Coba baca file yang ada
      const fileContent = await fs.readFile(submissionsFilePath, 'utf-8');
      submissions = JSON.parse(fileContent);
    } catch (error: any) {
      // Jika file tidak ada, kita akan membuatnya
      if (error.code !== 'ENOENT') {
        throw error; // Lemparkan error jika bukan "file not found"
      }
    }

    // Tambahkan kiriman baru dan tulis kembali ke file
    submissions.push(submission);
    await fs.writeFile(submissionsFilePath, JSON.stringify(submissions, null, 2));

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error saving contact form submission:', error);
    return {
      success: false,
      message: 'Failed to save submission.',
    };
  }
}
