import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  setDocumentTitle = () => {
    document.title = `You clicked ${this.state.count} times`;
  };

  componentDidMount() {
    this.setDocumentTitle();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("document title update");
      this.setDocumentTitle();
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
        />
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example;
