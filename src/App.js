import "./App.css";
import React, { Component } from "react";
// import Card from "./components/Card";
// import CardTwo from "./components/CardTwo";
// import CardThree from "./components/CardThree";
// import CardZero from "./components/CardZero";
import ParentLifeCycle from "./components/ParentLifeCycle";
import CounterHook from "./components/CounterHook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterHook />
      </div>
    );
  }
}

export default App;
