import React, { Component } from "react";

export default class Practice extends Component {
  state = {
    value: "",
    items: [],
  };
  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(e) =>
            this.setState({
              value: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            this.setState({ items: [...this.state.items, this.state.value] })
          }
        >
          add item
        </button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
