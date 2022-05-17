import { useState, useCallback } from "react";
import Button from "./Button";
import CounterHook from "./CounterHook";
import Title from "./Title";
import Todos from "./Todos";

const TodosContainer = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);
  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo Item"]);
  //   };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Title />
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <CounterHook count={count} increment />
      <Button handleIncrement={handleIncrement} />
    </>
  );
};

export default TodosContainer;
