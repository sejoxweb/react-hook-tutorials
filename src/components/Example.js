import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setDocumentTitle = () => {
    document.title = `You clicked ${this.state.count} times`;
  };

  componentDidMount() {
    this.setDocumentTitle();
  }
  componentDidUpdate() {
    this.setDocumentTitle();
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example;
