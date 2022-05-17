import React, { useContext } from "react";
import { CounterContext } from "../App";

function ViewCount() {
  const { count } = useContext(CounterContext);
  return <div>ViewCount {count}</div>;
}

export default ViewCount;
