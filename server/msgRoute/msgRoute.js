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
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "urzztnf2hwpi5eg5@ethereal.email",
      pass: "mEscYeqNqSQE3eEcgh"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: "hilalaissani@gmail.com",
    to: "hilalaissani@gmail.com",
    replyTo: "hilalaisssani@gmail.email",
    subject: "trying nodemailer",
    text: "helloooooo"
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      console.log("message is emailed", info.messageId);
      console.log("preview url", nodemailer.getTestMessageUrl(info));
    }
  });
  console.log(process.env.PASSWORD);
  res.send("<div> Message is sent </div>");
});
module.exports = router;
