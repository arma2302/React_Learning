import UseFetch from "./UseFetch";

export default function App() {
  const { products, error, loading } = UseFetch(
    "https://fakestoreapi.com/products"
  );
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <div>{products && <h1>Number of Products {products.length}</h1>}</div>;
}
