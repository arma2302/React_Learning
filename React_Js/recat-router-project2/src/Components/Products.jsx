import React, { useEffect, useState } from "react";
import { getProducts } from "../Auth";
import { Link, useLoaderData } from "react-router-dom";
import AddCartBtn from "./AddCartBtn";
export const productLoader = async () => {
  const { result } = await getProducts();
  return result;
};
export default function Products() {
  const [loading, setLaoding] = useState(false);
  const data = useLoaderData();
  useEffect(() => {
    if (!data) {
      setLaoding(true);
    } else {
      setLaoding(false);
    }
  }, []);

  return (
    <div>
      <h1>prodcuts</h1>
      <div>
        {loading && <p>Loading..............</p>}
        {data &&
          data.products.map((e, i) => {
            return (
              <div key={i}>
                <h1>
                  {e.id}:{e.title}
                </h1>
                <Link to={`/product/${e.id}`}>View Product</Link>
                <AddCartBtn product={e}>Add To cart</AddCartBtn>
              </div>
            );
          })}
      </div>
    </div>
  );
}
