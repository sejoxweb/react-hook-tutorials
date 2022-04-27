import React from "react";

class CardThree extends React.Component {
  state = { show: true };

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("The component named CardThree is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default CardThree;
