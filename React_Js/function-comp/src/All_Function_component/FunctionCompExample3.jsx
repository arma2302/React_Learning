import React from "react";

export default function FunctionCompExample3() {
  const array = [
    {
      id: 1,
      name: "arma",
    },
    {
      id: 2,
      name: "addv",
    },
    {
      id: 3,
      name: "applocum",
    },
    {
      id: 4,
      name: "Healthya",
    },
  ];
  return (
    <div>
      {array.map((_d, i) => {
        return (
          <div key={i}>
            <p>ID:{_d.id}</p>
            <p>Name:{_d.name}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
