import React, { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({ name: "", model: "" });

  return (
    <div>
      Car
      <input
        type="text"
        onChange={(e) => setCar({ ...car, name: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
      <h1>{JSON.stringify(car)}</h1>
    </div>
  );
};

export default Car;
