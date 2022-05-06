import React, { Component } from "react";

class ClassInterval extends Component {
  state = {
    count: 0,
  };

  interval = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount = () => {
    setInterval(this.interval, 500);
  };

  render() {
    return <div>ClassInterval {this.state.count}</div>;
  }
}

export default ClassInterval;
