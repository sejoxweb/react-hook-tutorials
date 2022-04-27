import React, { Component } from "react";
import CompE from "./CompE";

class CompC extends Component {
  render() {
    return (
      <div>
        <CompE username={this.props.username} />
      </div>
    );
  }
}

export default CompC;
