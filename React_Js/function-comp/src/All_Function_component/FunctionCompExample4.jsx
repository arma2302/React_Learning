import React from "react";

export default function FunctionCompExample4() {
  const isVisible = false;

  const handleClick = () => {
    alert("welcome");
  };
  return (
    <div>
      <h1>{isVisible ? "is visible" : "not visible"}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
