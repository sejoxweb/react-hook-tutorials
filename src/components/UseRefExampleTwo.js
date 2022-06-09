import { useState, useEffect, useRef } from "react";

function UseRefExampleTwo() {
  const [inputValue, setInputValue] = useState("j");
  let count = useRef("j");

  useEffect(() => {
    console.log("after every render running useEffect");
    count.current = inputValue;
    console.log("count.current ", count.current);
    console.log("inputValue", inputValue);
  });

  console.log("render");
  console.log("count.current ", count.current);
  console.log("inputValue", inputValue);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>preveious State: {count.current}</h1>
      <h1>current State: {inputValue}</h1>
    </>
  );
}

export default UseRefExampleTwo;
