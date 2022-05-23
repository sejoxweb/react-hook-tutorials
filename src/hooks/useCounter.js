import { useState } from "react";

function useCounter(initialCount = 0, incrementBy) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + incrementBy);
  const decrement = () => setCount(count - incrementBy);
  const reset = () => setCount(initialCount);
  return [count, increment, decrement, reset];
}

export default useCounter;
