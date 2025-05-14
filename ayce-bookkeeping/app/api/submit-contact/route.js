// This file should be placed at: app/api/submit-contact/route.js

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse request body
    const { name, email, company, message } = await request.json();
    
    // Validate required input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Send email
    const emailResponse = await resend.emails.send({
      from: 'Contact Form <noreply@ayce-bookkeeping.com>',
      to: 'info@ayce-bookkeeping.com',
      replyTo: email,
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
    
    return NextResponse.json({ 
      message: 'Message sent successfully',
      response: emailResponse 
    }, { status: 200 });
    
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      message: 'Failed to send message',
      error: error.message 
    }, { status: 500 });
  }
}