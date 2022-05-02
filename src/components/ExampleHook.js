import React, { useState, useEffect } from "react";

const ExampleHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("document title update");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      ExampleHook <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default ExampleHook;
