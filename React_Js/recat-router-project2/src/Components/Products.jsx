import React, { useEffect, useState } from "react";
import { getProducts, getCartData } from "../Auth";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import AddCartBtn from "./AddCartBtn";

// Loader function to fetch all products
export const productLoader = async () => {
  const { result } = await getProducts();
  return result;
};

export default function Products() {
  const [loading, setLoading] = useState(false); // For managing loading state
  const [cartItems, setCartItems] = useState([]); // For tracking items in the cart
  const data = useLoaderData(); // Loaded products data
  const naviagte = useNavigate();

  // Function to fetch cart data
  const fetchCartData = () => {
    const cartData = getCartData().cartData; // Assuming this function fetches the current cart
    setCartItems(cartData);
  };

  useEffect(() => {
    if (!data) {
      setLoading(true); // Set loading while data is being fetched
    } else {
      setLoading(false); // Stop loading when data is ready
    }
    fetchCartData(); // Fetch cart data when the component mounts
  }, [data]);

  // Function to check if a product is already in the cart
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId); // Return true if the product is in the cart
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        {loading && <p>Loading...</p>} {/* Show loading indicator */}
        {!loading &&
          data &&
          data.products.map((product, i) => {
            return (
              <div
                onClick={() => naviagte(`/product/${product.id}`)}
                class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-xl cursor-pointer"
                key={i}
              >
                <a class="relative flex h-60 overflow-hidden" href="#">
                  <img
                    class="absolute top-0 right-0 h-full w-full object-cover"
                    src={product.thumbnail}
                    alt="product image"
                  />
                  <div class="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                    <div class="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                    <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                    <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                  </div>
                  <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                    <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </a>
                <div class="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900">
                      {product.title}
                    </h5>
                  </a>
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span class="text-3xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                      <span class="text-sm text-slate-900 line-through">
                        $99
                      </span>
                    </p>
                  </div>
                  <AddCartBtn
                    product={product}
                    disable={isProductInCart == true ? true : false}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Add to cart
                  </AddCartBtn>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
