import React, { Component } from "react";
import ListItem from "./ListItem";

export class List extends Component {
  state = {
    numbers: [1, 2, 1],
    users: [
      { id: 1, name: "jafar", age: 25 },
      { id: 2, name: "fiza", age: 30 },
    ],
  };
  render() {
    //console.log(this.state.numbers.map((number) => number * 2)); //[2,4]
    // const list = this.state.numbers.map((number, index) => (
    //   <li key={index}>{number}</li>
    // )); //[<li>1</li>,<li>2</li>]
    const usersList = this.state.users.map((user, index) => (
      <ListItem key={index} user={user} />
    ));
    //const userList = [<li key={1}>1</li>, <li key={2}>2</li>];
    return (
      <div>
        List
        <ul>{usersList}</ul>
      </div>
    );
  }
}

export default List;
