import React, { Component } from "react";

class EventInClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "jafar",
    };

    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({
      name: "fiza",
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        {/* <button onClick={this.handleClick.bind(this)}>click me</button> */}
        {/* <button onClick={() => this.handleClick()}>click me</button> */}
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default EventInClass;
