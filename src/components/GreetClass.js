import React, { Component } from "react";

class GreetClass extends Component {
  render() {
    return <h1>hello class {this.props.name} </h1>;
  }
}

export default GreetClass;
