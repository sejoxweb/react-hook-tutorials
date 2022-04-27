import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="portal">{this.props.children}</div>,
      document.getElementById("portal-root")
    );
    // return <div className="portal">{this.props.children}</div>;
  }
}

export default Portal;
