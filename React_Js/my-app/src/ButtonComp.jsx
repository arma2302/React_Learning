import React, { Children } from "react";

export default function ButtonComp({ color, bg, children }) {
  return (
    <button style={{ color: color, backgroundColor: bg }}>{children}</button>
  );
}
