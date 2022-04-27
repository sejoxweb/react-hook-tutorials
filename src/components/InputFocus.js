import React, { Component } from "react";
import Input from "./Input";

class InputFocus extends Component {
  componentRef = React.createRef();

  handleClick = () => {
    this.componentRef.current.inputFocus();
  };
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.handleClick}>click to input focus</button>
      </div>
    );
  }
}

export default InputFocus;
