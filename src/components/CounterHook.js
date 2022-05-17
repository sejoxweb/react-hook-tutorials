import React, { useState } from "react";

function CounterHook({ count }) {
  console.log("Render counter");
  return <div>counter {count}</div>;
}

export default React.memo(CounterHook);
