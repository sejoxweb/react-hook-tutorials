import React, { useState } from "react";

const Todo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "jafar",
    },
  ]);

  const [value, setValue] = useState("");

  const addItem = () => {
    const isDuplicate = items.find((item) => item.name === value);
    if (value === "") {
      alert("please enter name, then add item");
    } else if (isDuplicate) {
      alert("name already there in list, please try with different name");
    } else {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: prevItems.length + 1,
          name: value,
        },
      ]);
      setValue("");
    }
  };

  return (
    <div>
      Todo{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem}>add item</button>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default Todo;
