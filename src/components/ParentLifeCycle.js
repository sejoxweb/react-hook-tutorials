import React, { Component } from "react";
import ChildLifeCycle from "./ChildLifeCycle";

export default class ParentLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.color,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parent getDerivedStateFromProps");

    return { color: props.color };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("Parent getSnapshotBeforeUpdate");
    return "snapshot";
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("snapshot", snapshot);
    console.log(prevState);
    console.log("Parent componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      // name: "fiza",
      color: "blue",
    });
  };
  render() {
    console.log("Parent render");
    return (
      <div>
        ParentLifeCycle
        <p>state {this.state.color}</p>
        <p> prop {this.props.color}</p>
        {/* {this.state.name === "jafar" && <ChildLifeCycle />} */}
        <button onClick={this.changeState}>click</button>
      </div>
    );
  }
}
