import React from "react";

function ListItem({ user: { name, age } }) {
  //   const {
  // user: { name, age },
  //   } = props;
  return (
    <li>
      {name} age is {age}
    </li>
  );
}

export default ListItem;
