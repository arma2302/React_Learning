import React from "react";
import WithLoading from "./WithLoading";

function WithData({ data }) {
  return (
    <div>
      {data.map((e, i) => {
        return (
          <div key={i}>
            <h2>{e.id}</h2>
            <h2>{e.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
export default WithLoading(WithData, 3);
