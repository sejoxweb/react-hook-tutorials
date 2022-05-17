import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("render todo");
  return (
    <>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo Item</button>
    </>
  );
};

//export default Todos;
export default memo(Todos);
