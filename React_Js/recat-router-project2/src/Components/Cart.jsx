import React, { useEffect, useState } from "react";
import {
  addItem,
  addToCart,
  calculateTotalAmount,
  getCartData,
  removeItem,
} from "../services";
import { useLoaderData, useNavigate } from "react-router-dom";

// Loader to fetch cart data
export const cartLoader = () => {
  const { cartData } = getCartData();
  return cartData;
};

export default function Cart() {
  let cartData = useLoaderData();
  const [data, setData] = useState(cartData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalAmount = calculateTotalAmount();

  // Function to refresh cart data
  const refreshCart = () => {
    setLoading(true); // Set loading to true while fetching data
    const cartData = getCartData().cartData;
    setData(cartData); // Update the cart state with fetched data
    setLoading(false); // Turn off loading after data is set
  };

  // Fetch cart data 
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

  const onPlaceOrder = () => {
    alert(
      "Thank You Your Totall is " +
        totalAmount +
        "$ , You Have ordered  " +
        cartData.length +
        "products"
    );
    navigate("/");
    localStorage.removeItem("cart");
  };

  const removeItemFromCart = (id) => {
    const updatedCratData = data.filter((item) => item.id !== id);
    console.log(updatedCratData);

    localStorage.setItem("cart", JSON.stringify(updatedCratData));
    refreshCart();
  };
  return (
    <>
      <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-md md:mt-12  ">
            <div className="rounded-3xl bg-white shadow-lg">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {data &&
                      data.map((e, i) => {
                        return (
                          <li
                            className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                            key={i}
                          >
                            <div className="shrink-0 relative">
                              <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                                {e.q}
                              </span>
                              <img
                                className="h-24 w-24 max-w-full rounded-lg object-cover"
                                src={e.thumbnail}
                                alt=""
                              />
                            </div>

                            <div className="relative flex flex-1 flex-col justify-between">
                              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div className="pr-8 sm:pr-5">
                                  <p className="text-base font-semibold text-gray-900">
                                    {e.title}
                                  </p>
                                  <div className="flex justify-between  text-sm text-black-400">
                                    <button
                                      onClick={() => handleAddItem(e.id)}
                                      className="bg-gray-100 px-3 rounded shadow-black mt-4"
                                      disabled={e.q >= 10}
                                    >
                                      +{e.q}+
                                    </button>
                                    <button
                                      onClick={() => handleRemoveItem(e.id)}
                                      className="bg-gray-100 px-3 rounded shadow-black mt-4"
                                      disabled={e.q === 0}
                                    >
                                      -1-
                                    </button>
                                  </div>
                                </div>

                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                    {e.price * e.q}$
                                  </p>
                                </div>
                              </div>

                              <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                <button
                                  onClick={() => removeItemFromCart(e.id)}
                                  type="button"
                                  className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                >
                                  Remove Item
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>

                {/* <!-- <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> --> */}

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">
                      USD
                    </span>{" "}
                    {totalAmount}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={onPlaceOrder}
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Place Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
