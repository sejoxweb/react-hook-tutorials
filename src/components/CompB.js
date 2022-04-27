import React, { Component } from "react";
import CompA from "./CompA";

class CompB extends Component {
  render() {
    return (
      <>
        <CompA />
      </>
    );
  }
}

export default CompB;
