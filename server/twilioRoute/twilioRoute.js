const express = require("express");
const router = express.Router();
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require("twilio")(accountSid, authToken);

////////////////////  twilio send messages
twilio.messages
  .create({
    to: process.env.MY_PHONE_NUMBER,
    from: "(347) 690-7519",
    body: "hoooollalllall"
  })
  .then(msg => {
    console.log(msg.sid);
  });
///////////// if we need to send response

router.post("/", (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message("this is me twilio sending ");
  res.writeHead(200, { "content-type": "text/xml" });
  res.end(twiml.toString());
});
module.exports = router;
