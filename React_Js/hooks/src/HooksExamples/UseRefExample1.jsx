import React, { useRef } from "react";

export default function UseRefExample1() {
  let countRef = useRef(0);
  const handleClick = () => {
    countRef.current = countRef.current + 1; // This will not update the state
    alert(`you have  clicked ${countRef.current} times`);
  };

  return (
    <div>
      <h1>UseRef example1</h1>
      <button onClick={handleClick}>Click</button>
      <p>{countRef.current}</p>
    </div>
  );
}
