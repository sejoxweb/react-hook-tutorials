import React, { Component } from "react";
import UserContext, { UserConsumer } from "./userContext";

class CompF extends Component {
  static contextType = UserContext;
  render() {
    return (
      <UserConsumer>{(username) => <div>CompF {username}</div>}</UserConsumer>
      // <div>compF {this.context}</div>
    );
  }
}

// CompF.contextType = UserContext;

export default CompF;
