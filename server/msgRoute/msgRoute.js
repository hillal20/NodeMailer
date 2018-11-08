const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
router.get("/", (req, res) => {
  res.send("msg route is here ");
});
router.post("/", (req, res) => {
  console.log(req.body);
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
    from: "hillal20@hotmail.com",
    to: "hilalaissani@gmail.com", //replyTo: "hilalaisssani@gmail.email",
    subject: "trying nodemailer",
    text: "helloooooo"
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
      console.log("message is emailed", info.messageId);
      console.log("preview url", nodemailer.getTestMessageUrl(info));
    }
  });
  console.log(process.env.PASSWORD);
  res.send("<div> Message is sent </div>");
});
module.exports = router;
