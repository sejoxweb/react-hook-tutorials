import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.inputRefTwo = React.createRef();
  }
  componentDidMount() {
    this.inputRefTwo.current.focus();
  }
  //   inputFocus = () => {
  //     this.inputRef.current.focus();
  //   };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.inputRefTwo} />
      </div>
    );
  }
}

export default Input;
