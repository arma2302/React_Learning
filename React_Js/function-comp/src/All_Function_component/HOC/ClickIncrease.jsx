import React, { useState } from "react";
import UpdatedComponent from "./WithCounter";

function ClickIncrease(props) {
  const [size, setSize] = useState(10);
  return (
    <div>
      <p>counter: {props.counter}</p>
      <button onClick={() => props.incrementCounter()}>
        Count Increase by Click
      </button>
    </div>
  );
}
export default UpdatedComponent(ClickIncrease, 3);
