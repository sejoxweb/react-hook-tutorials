import React, { Component } from "react";

class CounterClassTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    this.timer = setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 3000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  };

  render() {
    return <div>CounterClassTime {this.state.count}</div>;
  }
}

export default CounterClassTime;
