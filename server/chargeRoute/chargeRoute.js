const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_4uTrPeq8JDUTDumv8qDek87x");

router.post("/", (req, res) => {
  const { name, email, amount, token } = req.body;

  stripe.customers
    .create({ email: email, source: token })
    .then(customer => {
      stripe.charges.create({
        amount,
        description: name,
        currency: "usd",
        customer: customer.id
      });
    })
    .then(charge => {
      res.send("successfully");
    })
    .catch(err => res.send(err));
});

module.exports = router;
