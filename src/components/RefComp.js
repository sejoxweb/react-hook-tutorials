import React, { Component } from "react";

class RefComp extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    // console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  handleClick = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default RefComp;
