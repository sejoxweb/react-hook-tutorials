import React, { useEffect, useState } from "react";

const HookMove = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveMouse = (e) => {
    console.log("mouse move");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("add mousemove event listner");
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    }; //it will run before removing component from dom
  }, []); //after render it will run only once

  return (
    <div>
      HookMove x:{x} y:{y}
    </div>
  );
};

export default HookMove;
