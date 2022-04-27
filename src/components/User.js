import React, { Component } from "react";

class User extends Component {
  state = {
    username: "fiza",
  };
  render() {
    return <>{this.props.render(this.state.username)}</>;
  }
}

export default User;
