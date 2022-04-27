import React, { Component } from "react";
import CompF from "./CompF";
import CompG from "./CompG";

class CompE extends Component {
  render() {
    return (
      <>
        <CompF />
        <CompG username={this.props.username} />
      </>
    );
  }
}

export default CompE;
