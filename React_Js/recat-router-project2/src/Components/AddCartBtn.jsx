import React from "react";
import { addToCart } from "../Auth";

export default function AddCartBtn({ product, children }) {
  const handelAddToCart = () => {
    addToCart(product);
  };
  return <button onClick={handelAddToCart}>{children}</button>;
}
