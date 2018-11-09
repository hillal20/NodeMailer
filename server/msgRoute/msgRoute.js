const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require("twilio")(accountSid, authToken);

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
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
    }
    console.log("message is emailed", info);
  });

  res.send("Message is sent");
});

twilio.messages
  .create({
    to: process.env.MY_PHONE_NUMBER,
    from: "(347) 690-7519",
    body: "hoooollalllall"
  })
  .then(msg => {
    console.log(msg);
  });

module.exports = router;
