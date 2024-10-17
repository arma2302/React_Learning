import React from "react";

export default function ProductItem(props) {
  const { id, title, addToCart, isProductInCart, product, image } = props;
  return (
    <>
      <div className="w-1/5 bg-gray-100 p-2">
        <img className="w-full h-full object-cover " src={image}></img>
        <h1>{title}</h1>
        <button
          onClick={() => addToCart(product)}
          className={`text-sm rounded px-4 ${
            isProductInCart(id)
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-violet-400"
          }`}
          disabled={isProductInCart(id)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
