const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
router.get("/", (req, res) => {
  res.send("msg route is here ");
});
router.post("/", (req, res) => {
  const { name, lastName, message } = req.body;
  if (name === "" || lastName === "" || message === "") {
    return;
  }

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    secure: false,
    port: 25,
    auth: {
      user: "hillal20@hotmail.com",
      pass: "Rinad200@"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: `${req.body.name} ${req.body.lastName}`,
    to: "hilalaissani@gmail.com",
    subject: `message  from ${req.body.name} ${req.body.lastName}`,
    text: req.body.message
  }; //replyTo: "hilalaisssani@gmail.email",

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
    }
    console.log("message is emailed", info);
  });
  console.log(process.env.PASSWORD);
  res.send("Message is sent");
});
module.exports = router;
