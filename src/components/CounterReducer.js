import React, { useState, useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
}
function CounterReducer() {
  //const [count, setCount] = useState(0); //primitive data types
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      counter {state.count}{" "}
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        reset
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 5,
          })
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 5,
          })
        }
      >
        decrement
      </button>
    </div>
  );
}

export default CounterReducer;
