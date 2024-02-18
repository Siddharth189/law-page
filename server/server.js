const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, phone, email, type, description, agree } = req.body;

  // Create a transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'siddharthiiitg@gmail.com',
      pass: 'bbct akip gifw lbni'
    }
  });

  // Email content
  console.log("From Email: ***********");
  console.log("Name: ", name, " Phone: ", phone, " Email: ", email, " Type:", type, " Des:", description);
  console.log("*****************************************");
  const mailOptions = {
    from: 'siddharthiiitg@gmail.com',
    to: 'siddharthprg@gmail.com',
    subject: `Case Related[from website]: ${type}`,
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Type of Case: ${type}
      Description: ${description}
      Agree to recieve communication: ${agree}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
