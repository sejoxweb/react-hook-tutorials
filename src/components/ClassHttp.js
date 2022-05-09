import React, { Component } from "react";
import axios from "axios";

class ClassHttp extends Component {
  state = {
    users: [],
    error: "",
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/gusers")
      .then((response) =>
        this.setState({
          users: response.data,
        })
      )
      .catch((error) => {
        console.log("afar", error);
        this.setState({
          error: error.message,
        });
      });
  }
  render() {
    return (
      <div>
        ClassHttp{" "}
        {this.state.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {this.state.error}
      </div>
    );
  }
}

export default ClassHttp;
