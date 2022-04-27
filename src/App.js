import "./App.css";
import React, { Component } from "react";
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
