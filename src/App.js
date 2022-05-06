import "./App.css";
import React, { Component } from "react";
import CounterHook from "./components/CounterHook";
import CarClass from "./components/CarClass";
import Car from "./components/Car";
import Bikes from "./components/Bikes";
import Example from "./components/Example";
import CounterClassTime from "./components/CounterClassTime";
import Todo from "./components/Todo";
import ExampleHook from "./components/ExampleHook";
import ClassMove from "./components/ClassMove";
import HookMove from "./components/HookMove";
import ClassInterval from "./components/ClassInterval";
import HookInterval from "./components/HookInterval";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }
  render() {
    return (
      <div className="App">
        {/* <ClassInterval /> */}
        <HookInterval />
        {/* <Todo /> */}
        {/* <CounterHook /> */}
        {/* <CarClass /> */}
        {/* <Car /> */}
        {/* <Bikes /> */}
        {/* <Example /> */}
        {/* <ExampleHook /> */}
        {/* {this.state.isShow && <HookMove />} */}
        {/* <ClassMove /> */}
        {/* <CounterClassTime /> */}
        {/* <button
          onClick={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        >
          show or Hid
        </button> */}
      </div>
    );
  }
}

export default App;
