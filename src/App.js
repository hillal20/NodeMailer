import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      lastName: ""
    };
  }

  eventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitInfo = () => {
    //alert("helloooooo");
    const obj = {
      name: this.state.studentName,
      lastName: this.state.lastName
    };
  };
  render() {
    return (
      <div className="App">
        <h1> Hello Hilal </h1>
        <div>
          student name :
          <input
            type="text"
            placeholder="enter your name"
            name="studentName"
            value={this.state.studentName}
            onChange={this.eventHandler}
          />
          Last name :
          <input
            type="text"
            placeholder="enter your last name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.eventHandler}
          />
          <button onClick={this.submitInfo}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
