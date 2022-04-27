import React, { Component } from "react";

class CompA extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        I am A<p>username:{this.props.username}</p>
        <p>password:{this.props.password}</p>
      </div>
    );
  }
}

export default CompA;
