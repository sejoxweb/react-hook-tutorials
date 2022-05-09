import React, { useEffect, useState } from "react";

function HookInterval() {
  const [count, setCount] = useState(0);

  const cb = () => {
    console.log("cb running...");
    console.log(count);
    setCount((prevCount) => prevCount + 1);
  };
  function example() {
    console.log(exampleprop);
  }

  useEffect(() => {
    example();
    console.log("creating interval");
    const interval = setInterval(cb, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>HookInterval {count}</div>;
}

export default HookInterval;
