import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, description } = req.body;

    // Validate request data
    if (!firstName || !lastName || !email || !phone || !description) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      // Create a transporter using Gmail service
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail username
          pass: process.env.EMAIL_PASS, // Your Gmail app password
        },
      });

      // Email options
      const mailOptions = {
        from: `"Crealogic Contact Form" <${process.env.EMAIL_USER}>`,
        to: "crealogictech@gmail.com", // Replace with your recipient email
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

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}
