import React, { Component } from "react";

class ClassMove extends Component {
  state = {
    x: 0,
    y: 0,
  };

  mouseMove = (e) => {
    console.log("mouse move running");
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.mouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mouseMove);
  }

  render() {
    return (
      <div>
        ClassMove x:{this.state.x} y:{this.state.y}
      </div>
    );
  }
}

export default ClassMove;
