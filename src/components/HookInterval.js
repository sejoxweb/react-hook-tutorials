import React, { useEffect, useState } from "react";

function HookInterval() {
  const [count, setCount] = useState(0);

  const interval = () => setCount(count + 1);
  const timer = setInterval(interval, 500);
  useEffect(() => {
    console.log("running interval");

    return () => {
      console.log("hi");
      clearInterval(timer);
    };
  });

  return <div>HookInterval {count}</div>;
}

export default HookInterval;
