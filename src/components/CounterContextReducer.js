import React, { useState, useReducer, useContext } from "react";
import { CounterContext } from "../App";

function CounterContextReducer() {
  const { count, dispatch } = useContext(CounterContext);
  return (
    <div>
      {/* <CounterContext.Consumer>
        {({count}) => <div> {count}</div>}
      </CounterContext.Consumer> */}
      counter {count}{" "}
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

export default CounterContextReducer;
