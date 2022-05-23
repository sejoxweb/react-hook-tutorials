import React from "react";
import useFetch from "../hooks/useFetch";

function Users() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      Users
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default Users;
