const express = require("express");
const server = express();
const port = process.env.PORT || 4000;

server.get("/", (req, res) => {
  res.send("api is running ");
});

const routerRoute = require("./msgRoute/msgRoute.js");
server.use("/message", routerRoute);

server.listen(port, () => {
  console.log(`==== server is running on port ${port}====`);
});
