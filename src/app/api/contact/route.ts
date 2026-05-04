import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Creating ethereal test account dynamically for demonstration purposes
    // IN PRODUCTION: Replace with your actual SMTP credentials or a service like Resend/SendGrid
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: "ganeshveerapur35@gmail.com", // receiver address (from user info)
      subject: `New Portfolio Message from ${name}`, // Subject line
      text: message, // plain text body
      html: `
        <h3>Message from: ${name} (${email})</h3>
        <p>${message}</p>
      `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!',
      previewUrl: nodemailer.getTestMessageUrl(info) // Usually don't send this in prod
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
