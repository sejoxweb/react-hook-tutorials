import React from "react";

function Greet(props) {
  return (
    <div>
      <h1 onClick={props.ch}>{props.name}</h1>
    </div>
  );
}

export default Greet;
