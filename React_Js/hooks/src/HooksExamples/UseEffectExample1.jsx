import React, { useEffect, useState } from "react";

export default function UseEffectExample1() {
  const [msg, setMsg] = useState("hello");
  const [isClick, setClick] = useState(true);
  const [display, setDisplay] = useState("none");
  const handleClick = () => {
    setDisplay(isClick ? "block" : "none");
  };
  useEffect(() => {
    console.log("Button is clicked");
  }, [isClick]);
  return (
    <div>
      <p style={{ display }}>{msg}</p>
      <button onClick={handleClick}>Click me!!!!!</button>
    </div>
  );
}
