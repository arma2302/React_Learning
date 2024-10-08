import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      setError(null);
      setLoading(true);
      try {
        let response = await axios.get(url);
        console.log(response);

        let result = await response.data;
        setProducts(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { products, error, loading };
}

export default useFetch;
