import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import RSS from "really-smooth-scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      lastName: "",
      message: "",
      received: false
    };
  }

  componentDidMount() {
    this.submitInfo();
  }

  eventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitInfo = () => {
    // alert("helloooooo");
    const obj = {
      name: this.state.studentName,
      lastName: this.state.lastName,
      message: this.state.message
    };
    console.log(obj);
    const promise = axios.post("http://localhost:4000/message", obj);
    promise
      .then(msg => {
        console.log("msg==>", msg);
        if (msg.data === "Message is sent") {
          this.setState({ received: !this.state.received });
        }
      })
      .catch(err => {
        console.log("err ==> ", err.message);
      });
    this.setState({ studentName: "", lastName: "", message: "" });
  };
  render() {
    const { name, lastName, message } = this.state;
    return (
      <div className="App">
        {this.state.received === false && (
          <div>
            <h1> Contact me </h1>

            <div className="input">
              <input
                type="text"
                placeholder="enter your name"
                name="studentName"
                value={this.state.studentName}
                onChange={this.eventHandler}
              />
            </div>

            <div className="input">
              <input
                type="text"
                placeholder="enter your last name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.eventHandler}
              />
            </div>

            <div className="input">
              <textarea
                type="text"
                placeholder=" type your message"
                name="message"
                value={this.state.message}
                onChange={this.eventHandler}
              />
            </div>
            <div className="input">
              <button onClick={this.submitInfo}>Submit</button>
            </div>
            {(name === "" || lastName === "" || message === "") && (
              <div> the fields can not be empty</div>
            )}
          </div>
        )}
        {this.state.received === true && (
          <div>
            {" "}
            thank you for contacting us ...
            <button
              onClick={() => {
                this.setState({ received: !this.state.received });
              }}
            >
              back{" "}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
