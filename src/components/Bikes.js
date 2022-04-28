import React, { useState } from "react";

const Bikes = () => {
  const [bikes, setBikes] = useState([
    {
      id: 1,
      name: "yamaha",
    },
  ]);
  return (
    <div>
      Bikes{" "}
      <button
        onClick={() =>
          setBikes([
            ...bikes,
            {
              id: 1,
              name: "yamaha",
            },
          ])
        }
      >
        add bike
      </button>
      {bikes.map((bike) => (
        <h1>{bike.name}</h1>
      ))}
    </div>
  );
};

export default Bikes;
