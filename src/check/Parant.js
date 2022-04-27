import React, { Component } from "react";
import Childs from "./Childs";
import Regularcomp from "./Regularcomp";

class Parant extends Component {
  state = { name: "john" };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "john" });
    }, 2000);
  }
  //  shouldComponentUpdate(nextProps, nextState){
  //       return this.state.name !== nextState.name
  //  }
  render() {
    console.log("==parant comp==");
    return (
      <div>
        {this.state.name}
        <Childs />
        <Regularcomp />
      </div>
    );
  }
}

export default Parant;
