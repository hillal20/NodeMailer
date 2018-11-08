const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
router.get("/", (req, res) => {
  res.send("msg route is here ");
});
router.post("/", (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    host: "hilalaissani.com",
    port: 587,
    secure: false,
    auth: {
      user: "hilalaissani@gmail.com",
      pass: "123test"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: " amir dz <hilalaissani@gmail.com> ",
    to: "hillal20@hotmail.com",
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

  res.render("<div> Message is sent </div>");
});
module.exports = router;
