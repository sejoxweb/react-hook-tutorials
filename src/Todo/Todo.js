import React, { useState } from "react";
import { connect } from "react-redux";

function Todo(props) {
  const { list, addItem } = props;
  const [value, setValue] = useState("test");
  const [editValue, setEditValue] = useState({
    name: "",
  });

  // const [test, setList] = useState([
  //   {
  //     id: 1,
  //     name: "bruth tooth at 7am",
  //   },
  // ]);

  // const addItem = () => {
  //   // setList([
  //   //   ...list,
  //   //   {
  //   //     id: Math.random(),
  //   //     name: value,
  //   //   },
  //   // ]);
  // };

  const removeItem = (id) => {
    const filteredList = list.filter((el) => el.id !== id);
    //setList(filteredList);
  };

  const updateItem = () => {
    const mappedList = list.map((item) => {
      if (item.id === editValue.id) {
        item.name = editValue.name;
      }
      return item;
    });
    //setList(mappedList);
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
      <button onClick={() => addItem(value)}>add item</button>
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
            <button onClick={() => setEditValue(item)}>Edit</button>
            <button onClick={() => removeItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (value) =>
      dispatch({
        type: "ADD_ITEM",
        value: value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
