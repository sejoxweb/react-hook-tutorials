import "./App.css";
import React, { createContext, useReducer, useState } from "react";
import TodosContainer from "./components/TodosContainer";
// import CounterHook from "./components/CounterHook";
// import CounterReducer from "./components/CounterReducer";
// import CounterContextReducer from "./components/CounterContextReducer";
// import ViewCount from "./components/ViewCount";

// export const CounterContext = createContext();
// console.log(CounterContext);
// const initialState = {
//   count: 0,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "reset":
//       return initialState;
//     case "increment":
//       return { count: state.count + action.payload };
//     case "decrement":
//       return { count: state.count - action.payload };

//     default:
//       return state;
//   }
// }

function App() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <CounterContext.Provider value={{ count: state.count, dispatch }}>
    //   <div className="App">
    //     {/* <CounterHook /> */}
    //     <CounterContextReducer />
    //     <ViewCount />
    //   </div>
    // </CounterContext.Provider>
    <div className="App">
      <TodosContainer />
    </div>
  );
}

export default App;
