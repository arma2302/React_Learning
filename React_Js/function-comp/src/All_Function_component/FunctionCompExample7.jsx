import React, { useState } from "react";

export default function FunctionCompExample7() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");
  const handleClick = () => {
    setDisplay(name);
  };
  const handleKeyDown = () => {
    setDisplay("Key down event performed");
  };
  const handleMouseEnter = () => {
    setDisplay("Mouse Entered this element");
  };
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", () => {
    setDisplay("key up");
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e?.target?.value)}
      />{" "}
      <br />
      <button onClick={handleClick}>Display Name</button>
      <br />
      <p onMouseEnter={handleMouseEnter}>*{display}</p>
    </div>
  );
}
