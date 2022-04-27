import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("jafar");

  return (
    <div
      onClick={() => {
        setCount(count + 1);
        setName("fiza");
      }}
    >
      CounterHook {count} {name}
    </div>
  );
}

export default CounterHook;
