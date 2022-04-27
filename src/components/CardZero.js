import React from "react";

class CardZero extends React.Component {
  state = { favoritecolor: "red" };
  static getDerivedStateFromProps(props, state) {
    return props.favcol ? { favoritecolor: props.favcol } : null;
  }

  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default CardZero;
