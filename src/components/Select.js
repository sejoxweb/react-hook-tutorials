import React, { Component } from "react";
import "./Select.css";
class Select extends Component {
  state = {
    selectedValue: "primary",
  };
  render() {
    return (
      <div>
        <select
          value={this.state.selectedValue}
          onChange={(e) =>
            this.setState({
              selectedValue: e.target.value,
            })
          }
        >
          <option value="default">default</option>
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
        </select>
        <h1 className={this.state.selectedValue}>Hello world</h1>
      </div>
    );
  }
}

export default Select;
