import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export class Parent extends Component {
  state = { name: "jafar" };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "jafar" });
    }, 2000);
  }
  render() {
    console.log("===Parent===");
    return (
      <div>
        {this.state.name}
        <RegularComp />
        <PureComp />
        <MemoComp />
      </div>
    );
  }
}

export default Parent;
