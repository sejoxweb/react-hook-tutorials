import React, { Component } from "react";

class CarClass extends Component {
  state = {
    name: "",
    model: "",
  };
  render() {
    return (
      <div>
        CarClass
        <input
          type="text"
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          onChange={(e) =>
            this.setState({
              model: e.target.value,
            })
          }
        />
        <h1>{JSON.stringify(this.state)}</h1>
      </div>
    );
  }
}

export default CarClass;
