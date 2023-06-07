const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page.");
});

app.listen(5000, () => console.log("Server running on localhost:5000"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    host: 'smtp.gmail.com',
    port: 587,
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.APP_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: <br /> ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({status: "Error."});
    } else {
      res.json({status: "Message sent."});
    }
  });
});