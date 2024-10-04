import { useState } from "react";
import UpdatedComponent from "./WithCounter";

function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  const { counter, incrementCounter } = props;
  return (
    <div>
      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on hover
      </button>
      <p style={{ fontSize }}>
        Size of font in onMouseOver function: {fontSize}
      </p>
      <p> Value of 'name' in ClickIncrease: {props.name}</p>
      <button onClick={() => incrementCounter()}>Increment counter</button>
      <p> Value of 'counter' in ClickIncrease: {counter}</p>
    </div>
  );
}
export default UpdatedComponent(ClickIncrease, 10);
