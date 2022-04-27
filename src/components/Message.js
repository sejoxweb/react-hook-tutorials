import React, { Component } from "react";
import Greet from "./Greet";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "welcom to our app",
    };
  }

  changeMessage = () => {
    this.setState({
      msg: "thanks for subscribe",
    });
  };

  render() {
    return (
      <div>
        <p onClick={() => this.changeMessage()}>{this.state.msg}</p>
        <Greet name={this.state.msg} ch={this.changeMessage} />
      </div>
    );
  }
}

export default Message;
