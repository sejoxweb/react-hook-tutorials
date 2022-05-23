import { useEffect, useRef } from "react";

function UseRefExample() {
  const inputElement = useRef();

  //   const focusInput = () => {
  //     inputElement.current.focus();
  //   };
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputElement} />
      {/* <button onClick={focusInput}>Focus Input</button> */}
    </>
  );
}

export default UseRefExample;
