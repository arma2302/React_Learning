import axios from "axios";
import { useEffect, useState } from "react";
const UseFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // IIFE if you want to use async await
    const controller = new AbortController()()(async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await axios.get(url);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);
  return { products, error, loading };
};
export default UseFetch;
