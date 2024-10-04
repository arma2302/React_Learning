import React, { useEffect, useState } from "react";

export default function UseEffectExample2() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    setData(data);
  };
  return (
    <div>
      <h1>UseEffectExample2(api fetch)</h1>
      {data ? (
        data.map((_e, i) => {
          return (
            <div key={i}>
              <p>
                {_e.id}:{_e.title}
              </p>
            </div>
          );
        })
      ) : (
        <p>Loading.........</p>
      )}
    </div>
  );
}
