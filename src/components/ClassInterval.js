import React, { Component } from "react";

class ClassInterval extends Component {
  state = {
    count: 0,
  };

  cb = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.cb, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>ClassInterval {this.state.count}</div>;
  }
}

export default ClassInterval;
