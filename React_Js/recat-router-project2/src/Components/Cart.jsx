import React, { useEffect, useState } from "react";
import { addItem, addToCart, getCartData, removeItem } from "../Auth";
import { useLoaderData } from "react-router-dom";

// Loader to fetch cart data
export const cartLoader = () => {
  const { cartData } = getCartData();
  return cartData;
};

export default function Cart() {
  let cartData = useLoaderData();
  const [data, setData] = useState(cartData);
  const [loading, setLoading] = useState(false);

  // Function to refresh cart data
  const refreshCart = () => {
    setLoading(true); // Set loading to true while fetching data
    const cartData = getCartData().cartData;
    setData(cartData); // Update the cart state with fetched data
    setLoading(false); // Turn off loading after data is set
  };

  // Fetch cart data when component mounts
  useEffect(() => {
    refreshCart();
  }, []);

  // Function to handle adding items
  const handleAddItem = (id) => {
    addItem(id);
    refreshCart(); // Refresh cart to reflect updated quantity
  };

  // Function to handle removing items
  const handleRemoveItem = (id) => {
    removeItem(id);
    refreshCart(); // Refresh cart to reflect updated quantity
  };

  if (loading) {
    return <p>Loading cart data...</p>; // Show a loading message or spinner
  }

  if (!data.length) {
    return <p>Your cart is empty!</p>; // Show a message if cart is empty
  }

  return (
    <div>
      {data.map((e, i) => (
        <div key={i} className="cart-item">
          <h1>
            {e.title}: {e.q} in the cart
          </h1>
          <button
            onClick={() => handleAddItem(e.id)}
            disabled={e.q >= 10} // Disable if the quantity is greater than 10 (example)
          >
            + {e.q}
          </button>
          <button
            onClick={() => handleRemoveItem(e.id)}
            disabled={e.q === 0} // Disable if the quantity is zero
          >
            - Remove
          </button>
        </div>
      ))}
    </div>
  );
}
