import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "ganeshveerapur35@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      text: message,
      html: `
        <h3>Message from: ${name} (${email})</h3>
        <p>${message}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!',
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
