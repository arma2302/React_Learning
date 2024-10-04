import React, { useState } from "react";

export default function FunctionCompExample5() {
  const [isLoggedIn, setLogging] = useState(false);
  const [display, setDislay] = useState("block");

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? <DashBoard /> : <p>Please Login First</p>}

      <a
        href="#"
        onClick={() => [setLogging(true), setDislay("none")]}
        style={{ display: display }}
      >
        Click Here To login
      </a>
    </div>
  );
}

export function DashBoard() {
  return (
    <div>
      <h1>welcome to DashBoard</h1>
    </div>
  );
}
