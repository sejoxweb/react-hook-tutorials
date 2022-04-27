import React, { useState } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);

  const incrementByThree = () => {
    for (let i = 11; i <= 13; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      counter {count} <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={incrementByThree}>inrementbyThree</button>
    </div>
  );
}

export default CounterHook;
