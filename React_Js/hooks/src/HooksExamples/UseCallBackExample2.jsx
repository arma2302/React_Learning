import React from "react";
import { useCallback, useState } from "react";

export default function UseCallBackExample2() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Only recreate handleClick when count changes
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
export function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}
