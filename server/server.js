const express = require("express");
const server = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL_MLAB,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err.message);
    }
    console.log(" == DB is connected ==== ");
  }
);

const bodyParser = require("body-parser");
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("api is running ");
});

const chargeRoute = require("./chargeRoute/chargeRoute.js");
server.use("/charge", chargeRoute);

const twilioRoute = require("./twilioRoute/twilioRoute.js");
server.use("/sms", twilioRoute);

const msgRoute = require("./msgRoute/msgRoute.js");
server.use("/message", msgRoute);

server.listen(port, () => {
  console.log(`==== server is running on port ${port}====`);
});
