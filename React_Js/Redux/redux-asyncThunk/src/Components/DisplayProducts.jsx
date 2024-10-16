import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  getProducts,
} from "../features/productSLice";

export default function DisplayProducts() {
  const dispatch = useDispatch();
  const { error, loading, productsData } = useSelector((state) => {
    console.log(state.reducer);
    return state.reducer;
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return <h1>Loading............</h1>;
  }

  const handleViewProduct = (id) => {
    dispatch(getProduct(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      {productsData &&
        productsData.map((e, i) => {
          return (
            <div key={i}>
              <h1 k>
                {e.id}:{e.title}
              </h1>
              <button onClick={() => handleViewProduct(e.id)}>
                View Product
              </button>
              <button onClick={() => handleDelete(e.id)}> Delete</button>
            </div>
          );
        })}
    </div>
  );
}
