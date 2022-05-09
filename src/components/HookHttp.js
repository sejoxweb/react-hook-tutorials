import React, { useEffect, useState } from "react";
import axios from "axios";

const HookHttp = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  const handleChange = (e) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + e.target.value)
      .then((res) => setCurrentUser(res.data))
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      HookHttp{" "}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <div>--------------------</div>
      <input onChange={handleChange} />
      <div> error : {error}</div>
      <div>
        {currentUser.id} {currentUser.name}
      </div>
    </div>
  );
};

export default HookHttp;
