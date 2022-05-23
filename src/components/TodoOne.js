//Hooks are re-usable functions
//Component logic using by multiple components,
//we can extract to custome hook
//Hooks start with "use", e.g: useFetch
import React from "react";
import useFetch from "../hooks/useFetch";
function TodoOne() {
  const [loading, data, errorMsg] = useFetch(
    "https://jsonplaceholder.typicodef.com/todos"
  );
  return (
    <div>
      TodoOne
      {loading && "Loading..."}
      {Array.isArray(data) &&
        data.map((item) => <li key={item.id}>{item.title}</li>)}
      {errorMsg}
    </div>
  );
}

export default TodoOne;
