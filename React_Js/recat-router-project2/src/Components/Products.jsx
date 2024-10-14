import React, { useEffect, useState } from "react";
import { getProducts, getCartData, addToCart, getProduct } from "../services"; // Ensure addToCart is imported
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import AddCartBtn from "./AddCartBtn";

// Loader function to fetch all products
export const productLoader = async () => {
  const { result } = await getProducts();
  return result;
};

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const data = useLoaderData();
  const navigate = useNavigate();

  const fetchCartData = () => {
    const cartData = getCartData().cartData;
    setCartItems(cartData);
  };

  useEffect(() => {
    if (!data) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    fetchCartData();
  }, [data]);

  // Function to check if a product is already in the cart
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Update cart items state when a product is added
  const handleAddToCart = (product) => {
    addToCart(product); // Assuming this function adds the product to the cart
    fetchCartData(); // Refresh the cart data
  };

  return (
    <>
      <div className="flex items-center sm:justify-between flex-wrap justify-center">
        {loading && <p>Loading...</p>}
        {!loading &&
          data &&
          data.products.map((product) => (
            <div
              className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md rounded-xl cursor-pointer"
              key={product.id} // Use product.id as the key
            >
              <a className="relative flex h-60 overflow-hidden" href="#">
                <img
                  className="absolute top-0 right-0 h-full w-full object-cover"
                  src={product.thumbnail}
                  alt="product image"
                />
                <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                </div>
                <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                  <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                    Like
                  </button>
                </div>
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {product.title}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      $99
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center  w-full">
                  <AddCartBtn
                    product={product}
                    onAddToCart={handleAddToCart}
                    disabled={isProductInCart(product.id)} // Disable if already in cart
                  >
                    Add To Cart
                  </AddCartBtn>
                  <button
                    type="button"
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white x transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    View Product
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
          ))}
      </div>
    </>
  );
}
