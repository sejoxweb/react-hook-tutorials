import React, { Component } from "react";
import User from "./User";
import UserContext from "./userContext";

class CompG extends Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <div>CompG using props {this.props.username}</div>
        <div>CompG context {this.context}</div>
        <User render={(username) => <div>CompG {username}</div>} />
      </>
    );
  }
}

export default CompG;
