import React, { Component } from "react";

class CounterHookTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    this.timer();
  };

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  };

  timer = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 3000);
  };

  render() {
    return <div>CounterHookTime {this.state.count}</div>;
  }
}

export default CounterHookTime;
