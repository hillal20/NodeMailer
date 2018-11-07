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
      message: ""
    };
  }

  componentDidMount() {
    this.submitInfo();
  }

  eventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitInfo = () => {
    //alert("helloooooo");
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
      })
      .catch(err => {
        console.log("err ==> ", err.message);
      });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1> Hello Hilal </h1>

          <div className="input">
            student name :
            <input
              type="text"
              placeholder="enter your name"
              name="studentName"
              value={this.state.studentName}
              onChange={this.eventHandler}
            />
          </div>
          <div className="input">
            Last name :
            <input
              type="text"
              placeholder="enter your last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.eventHandler}
            />
          </div>
          <div className="input">
            Message:
            <textarea
              type="text"
              placeholder="message"
              name="message"
              value={this.state.message}
              onChange={this.eventHandler}
            />
          </div>
          <div className="input">
            <button onClick={this.submitInfo}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
