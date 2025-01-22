import nodemailer from "nodemailer";

export const mailPost = (req, res) => {
  const { name, phone, description } = req.body;

  // Create a transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "siddharthiiitg@gmail.com",
      pass: "ynta iygy ufbr kzln",
    },
  });

  const mailOptions = {
    from: "siddharthiiitg@gmail.com",
    to: "siddharthprg@gmail.com",
    subject: `Case from website`,
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
