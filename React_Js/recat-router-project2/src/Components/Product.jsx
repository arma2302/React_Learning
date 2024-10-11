import React, { useState } from "react";
import { addToCart, getProduct } from "../Auth";
import { useLoaderData } from "react-router-dom";
import AddCartBtn from "./AddCartBtn";

export const singelProductLoader = async ({ params }) => {
  const { result } = await getProduct(params.prodId);
  return result;
};

export default function Product() {
  const product = useLoaderData();
  console.log(product);

  return (
    <div>
      <h1>
        {product.id}:{product.title}
      </h1>
      <p>{product.description}</p>
      <b>{product.price}$</b>
      <br />
      <AddCartBtn product={product}>Add to cart</AddCartBtn>
      <button>Whishlist</button>
    </div>
  );
}
