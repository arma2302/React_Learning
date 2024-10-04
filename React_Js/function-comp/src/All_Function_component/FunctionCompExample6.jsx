import React, { useRef } from "react";

export default function FunctionCompExample6() {
  const myRef = useRef();
  const handleClick = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
