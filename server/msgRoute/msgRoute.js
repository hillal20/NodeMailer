const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("msg route is here ");
});
router.post("/", (req, res) => {
  res.send("post is her ==== ");
});
module.exports = router;
