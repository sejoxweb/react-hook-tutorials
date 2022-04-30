import "./App.css";
import React, { Component } from "react";
import CounterHook from "./components/CounterHook";
import CarClass from "./components/CarClass";
import Car from "./components/Car";
import Bikes from "./components/Bikes";
import Example from "./components/Example";
import CounterHookTime from "./components/CounterHookTime";
import Todo from "./components/Todo";

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
        <Todo />
        {/* <CounterHook /> */}
        {/* <CarClass /> */}
        {/* <Car /> */}
        {/* <Bikes /> */}
        {/* <Example /> */}
        {/* {this.state.isShow && <CounterHookTime />}
        <button
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
