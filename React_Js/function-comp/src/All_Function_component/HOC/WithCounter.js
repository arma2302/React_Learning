import React from "react";
import { useState } from "react";
const UpdatedComponent = (OriginalComponent, increaseCount) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10);
    return (
      <OriginalComponent
        name="HOC"
        counter={counter}
        incrementCounter={() => setCounter((size) => size + increaseCount)}
      />
    );
  }
  return NewComponent;
};
export default UpdatedComponent;
