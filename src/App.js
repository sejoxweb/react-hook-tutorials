import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import UseRefExampleTwo from "./components/UseRefExampleTwo";
import Todo from "./Todo/Todo";

function App() {
  // const [user, setUser] = useState({
  //   name: "jafar",
  //   age: 34,
  // });

  // const handleRemove = () => {
  //   const newUser2 = { ...user };
  //   delete newUser2.age;
  //   setUser(newUser2);
  // };

  // const handleAdd = () => {
  //   setUser({ ...user, color: "red" });
  // };

  return (
    <>
      <Todo />
      {/* <UseRefExampleTwo /> */}
      {/* <div>hi</div>
      <button onClick={handleRemove}>remove</button>
      <button onClick={handleAdd}>add</button>
      <ul>
        {Object.values(user).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/blogs" element={<Blogs />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
