import React, { useState } from "react";

export default function PropsExample1() {
  const [name, setName] = useState("arma");
  const handleClick = () => {
    setName("new name");
  };
  return (
    <div>
      <Child name={name} handleClick={handleClick} />
    </div>
  );
}
export function Child({ name, handleClick }) {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
