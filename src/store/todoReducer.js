const initialState = {
  list: [
    {
      id: 1,
      name: "bruth tooth at 7am from redux",
    },
  ],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(action);
      let newState = { ...state };
      newState.list = [
        ...newState.list,
        {
          id: Math.random(),
          name: action.value,
        },
      ];
      return newState;
  }
  return state;
};
export default todoReducer;
