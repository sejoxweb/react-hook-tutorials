import React from "react";

function Child(props) {
  return (
    <>
      {props.users.map((el) => (
        <React.Fragment key={el.id}>
          <td>{el.name}</td>
          <td>{el.age}</td>
        </React.Fragment>
      ))}
      <td>name</td>
      <td>age</td>
    </>
  );
}

export default Child;
