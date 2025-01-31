import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, description } = await request.json();

    // Validate request data
    if (!firstName || !lastName || !email || !phone || !description) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);

    // Create a transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Crealogic Contact Form" <${process.env.EMAIL_USER}>`,
      to: "crealogictech@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Description: ${description}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
} 