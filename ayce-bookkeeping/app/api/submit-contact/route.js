// This file should be placed at: /api/submit-contact.js or /pages/api/submit-contact.js 
// (depending on your Next.js setup)

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, company, message } = req.body;

  // Validate required input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <noreply@ayce-bookkeeping.com>', // Changed from user's email to avoid spam issues
      to: 'info@ayce-bookkeeping.com',
      replyTo: email, // Set reply-to as the user's email
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.status(200).json({ 
      message: 'Message sent successfully',
      response: emailResponse 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      message: 'Failed to send message',
      error: error.message 
    });
  }
}