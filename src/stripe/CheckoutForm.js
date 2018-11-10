import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Axios from "axios";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
  }
  submit = ev => {
    const amount = 20000;
    const name = "hilal";
    const email = "hilalaissani@gmail.com";
    this.props.stripe
      .createToken({
        name: name,
        email: email
      })
      .then(res1 => {
        console.log("===>res1", res1);
        const { token } = res1;
        const { id, email } = token;

        Axios.post(`http://localhost:4000/charge`, {
          name,
          email,
          amount,
          token: id
        })
          .then(msg => {
            console.log(msg);
          })
          .catch(err => console.log(err));
      });
  };
  render() {
    return (
      <div className="checkout">
        {" "}
        <CardElement />
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
export default injectStripe(CheckoutForm);
