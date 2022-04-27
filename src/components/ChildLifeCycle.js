import React, { Component } from "react";

export default class ChildLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "jafar",
    };
    console.log("Child constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Child getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Child didmount");
  }
  componentWillUnmount() {
    console.log("i am removing from DOM");
    //network, remove event listners,
  }
  // static getDerivedStateFromError
  // compopnentDidCatch
  render() {
    console.log("Child render");
    return <div>ChildLifeCycle</div>;
  }
}
