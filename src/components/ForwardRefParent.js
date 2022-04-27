import React, { Component } from "react";
import ForwardRefComp from "./ForwardRefComp";

export default class ForwardRefParent extends Component {
  inputRef = React.createRef();
  handleClick = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <ForwardRefComp ref={this.inputRef} />
        <button onClick={this.handleClick}>click to focus</button>
      </div>
    );
  }
}
