import React, { useState } from "react";

function Todo() {
  const [value, setValue] = useState("test");
  const [editValue, setEditValue] = useState({
    name: "",
  });

  const [list, setList] = useState([
    {
      id: 1,
      name: "bruth tooth at 7am",
    },
  ]);

  const addItem = () =>
    setList([
      ...list,
      {
        id: Math.random(),
        name: value,
      },
    ]);
  const removeItem = (id) => {
    const filteredList = list.filter((el) => el.id !== id);
    setList(filteredList);
  };

  const updateItem = () => {
    const mappedList = list.map((item) => {
      //   console.log(item);
      //   console.log(editValue);

      if (item.id === editValue.id) {
        item.name = editValue.name;
      }
      return item;
    });
    //console.log(mappedList);
    setList(mappedList);
  };

  const onEdit = (item) => {
    setEditValue(item);
    console.log(item);
  };
  return (
    <div>
      Todo list
      <input
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
      />
      <button onClick={addItem}>add item</button>
      <input
        value={editValue.name}
        onChange={(e) => {
          console.log(e.target.value);
          setEditValue({ ...editValue, name: e.target.value });
        }}
      />
      <button onClick={updateItem}>Update</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => removeItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
