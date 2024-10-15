import React from "react";
import { addToCart } from "../services"; 

export default function AddCartBtn({
  product,
  onAddToCart,
  disabled,
  children,
}) {
  const handleAddToCart = () => {
    if (!disabled) {
      addToCart(product); // Add product to the cart
      onAddToCart(product); // Call the provided function to handle UI updates
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled}
      className={`flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition 
                  ${
                    disabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-700"
                  }`}
    >
      {children}
    </button>
  );
}
