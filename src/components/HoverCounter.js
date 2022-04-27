import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.incrementCount}>
        name {this.props.name} Clicked {this.props.count} times
      </h1>
    );
  }
}

export default withCounter(HoverCounter, 10);
