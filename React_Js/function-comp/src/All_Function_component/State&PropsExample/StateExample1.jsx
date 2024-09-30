import React, { useState } from "react";

export default function StateExample1() {
  const [msg, setMsg] = useState(
    "this is normal msg  ,msg will change if you click on the btn"
  );

  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={() => setMsg("new msg is here")}>
        {" "}
        Clickkkk meee!!!{" "}
      </button>
      <h2>{count} is the current count</h2>
      <button onClick={handleCount}>Count ++</button>
    </div>
  );
}
