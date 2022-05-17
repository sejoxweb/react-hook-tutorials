import React from "react";

function Button({ handleIncrement }) {
  console.log("render button");
  return <button onClick={handleIncrement}>increment</button>;
}

export default React.memo(Button);
