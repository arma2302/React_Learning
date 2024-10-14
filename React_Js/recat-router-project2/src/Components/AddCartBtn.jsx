import React from "react";
import { addToCart } from "../Auth";

export default function AddCartBtn({ product, children, disable }) {
  const handelAddToCart = () => {
    addToCart(product);
  };
  return (
    <button
      onClick={handelAddToCart}
      disabled={disable}
      class="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
    >
      {children}
    </button>
  );
}
