import React, { useState, useEffect } from "react";
import { NavLink, Outlet, redirect } from "react-router-dom";
import { getCartData } from "../services"; // Assuming `getCartData` fetches the cart items

export default function HomePage() {
  const [loading, setLoading] = useState(false); // Loading state for overall UI
  const [cart, setCart] = useState([]); // Store cart data

  // Function to fetch cart data
  const refreshCart = () => {
    setLoading(true); // Show loader while cart data is being fetched
    const cartData = getCartData().cartData; // Fetch cart data (assuming from localStorage or API)
    setCart(cartData);
    setLoading(false); // Stop loader after fetching data
  };

  useEffect(() => {
    refreshCart(); // Refresh cart when the component mounts
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between bg-slate-50 p-6">
        <div className="search w-96 hidden sm:block">Search</div>
        {/* Navigation bar */}
        <nav>
          <ul className="flex sm:justify-center justify-between w-full">
            <li className="mx-4 ">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-green-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-green-500" : ""
                }
              >
                LogOut
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-green-500" : ""
                }
              >
                {/* Change button based on cart state */}
                {loading ? (
                  <span>Loading...</span>
                ) : cart.length > 0 ? (
                  <span>Cart ({cart.length})</span> // Display number of items in cart
                ) : (
                  <span>Cart</span> // Show default cart button if empty
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Outlet to render child components */}
      <div className="p-6 bg-neutral-200">
        <Outlet />
      </div>
    </div>
  );
}
