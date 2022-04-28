import "./App.css";
import React, { Component } from "react";
import CounterHook from "./components/CounterHook";
import CarClass from "./components/CarClass";
import Car from "./components/Car";
import Bikes from "./components/Bikes";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CounterHook /> */}
        {/* <CarClass /> */}
        {/* <Car /> */}
        <Bikes />
      </div>
    );
  }
}

export default App;
