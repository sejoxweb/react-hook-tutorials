import React, { Component } from "react";

export class Form extends Component {
  state = {
    user: "",
    usernew: "",
    message: "greeting",
    course: "angular",
    isClicked: false,
  };
  handleUserChange = (e) =>
    this.setState({
      user: e.target.value,
    });

  handleMessageChange = (e) =>
    this.setState({
      message: e.target.value,
    });

  handleCourseChange = (event) => {
    this.setState({
      course: event.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state.user + this.state.message + this.state.course);
    e.preventDefault(); //to avoid reload
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          user{" "}
          <input
            value={this.state.user}
            onChange={this.handleUserChange}
            onBlur={() => {
              this.setState({
                usernew: this.state.user,
              });
            }}
          />
          {this.state.user.length > 2 && "showing error message"}
        </div>
        <div>
          user new{" "}
          <input
            value={this.state.usernew}
            onChange={(e) => {
              this.setState({
                usernew: this.state.user + e.target.value,
              });
            }}
            onBlur={() => {
              this.setState({
                isClicked: true,
              });
            }}
          />
        </div>
        {this.state.isClicked && this.state.usernew}
        <div>
          user{" "}
          <textarea
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
        </div>
        <div>
          <select value={this.state.course} onChange={this.handleCourseChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
