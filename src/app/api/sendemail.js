import nodemailer from "nodemailer";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, description, captchaToken } = req.body;

    // Validate request data
    if (!firstName || !lastName || !email || !phone || !description || !captchaToken) {
      return res.status(400).json({ message: "All fields are required, including CAPTCHA." });
    }

    // Verify CAPTCHA
    try {
      const verifyResponse = await axios.post(
        VERIFY_URL,
        new URLSearchParams({
          secret: process.env.CLOUDFLARE_SECRET_KEY,
          response: captchaToken,
        }).toString(),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      const { success } = verifyResponse.data;
      if (!success) {
        return res.status(400).json({ message: "CAPTCHA verification failed." });
      }
    } catch (captchaError) {
      console.error("CAPTCHA verification error:", captchaError);
      return res.status(500).json({ message: "CAPTCHA verification service failed." });
    }

    // Send email logic
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

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

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (emailError) {
      console.error("Email send error:", emailError);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}
