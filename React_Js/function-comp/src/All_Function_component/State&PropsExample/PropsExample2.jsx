import React, { useState } from "react";

export default function PropsExample2() {
  const [dataFromChild, setData] = useState("");

  const handleDataChange = (data) => {
    setData(data);
  };
  return (
    <div>
      <h1>Data From Child : {dataFromChild}</h1>
      <Child handleDataChange={handleDataChange}></Child>
    </div>
  );
}

export function Child({ handleDataChange }) {
  const handleData = () => {
    const data = "Hello From Child";
    handleDataChange(data);
  };
  return (
    <div>
      <button onClick={handleData}>click to send data to parent</button>
    </div>
  );
}
