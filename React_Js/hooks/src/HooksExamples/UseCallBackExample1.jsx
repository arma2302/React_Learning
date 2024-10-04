import React, { useCallback, useEffect, useState } from "react";

export default function UseCallBackExample1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const fetchData = useCallback(
    async (SearchId) => {
      console.log(query);

      setError(null);
      setLoading(true);
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${SearchId}`
        );

        if (!response.ok) {
          throw new Error("response is not valid ");
        }
        const result = await response.json();
        setData([...data, result]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  useEffect(() => {
    if (query) {
      fetchData(query);
    }
  }, [query, fetchData]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={() => fetchData(query)}>search</button>
      <div>
        {loading && <p>Loading....</p>}
        {error && <p>{error}</p>}
        {data &&
          data.map((e, i) => {
            return (
              <div key={i}>
                <p>Id:{e.id}</p>
                <p>Name:{e.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
