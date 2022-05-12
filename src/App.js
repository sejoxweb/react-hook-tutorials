import "./App.css";
import React, { createContext, useState } from "react";
import CompC from "./components/CompC";

export const UserContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState("sejox");
  const [theme, setTheme] = useState("blue");
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <CompC />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
