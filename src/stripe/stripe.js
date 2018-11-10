import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm.js";
class Stripe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        stripe ....
        <div>
          <StripeProvider apiKey="pk_test_dtZeEKgd6FSjpH2sFi8RAYFa">
            <Elements>
              <CheckoutForm />
            </Elements>
          </StripeProvider>
        </div>
      </div>
    );
  }
}
export default Stripe;
