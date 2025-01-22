import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const mailPost = (req, res) => {
  const { name, phone, description } = req.body;

  // Create a transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMPT_PORT,
    secure: false,
    auth: {
      user: process.env.SENDER_USERNAME,
      pass: process.env.PASSCODE,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_USERNAME,
    to: process.env.RECEIVER_USERNAME,
    subject: process.env.MAIL_SUBJECT,
    text: `
          Name: ${name}
          Phone: ${phone}
          Description: ${description}
        `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};
