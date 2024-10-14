import React, { useState, useEffect } from "react";
import { addToCart, getCartData, getProduct } from "../Auth";
import { useLoaderData, useNavigate } from "react-router-dom";
import AddCartBtn from "./AddCartBtn";

// Loader for fetching a single product based on product ID
export const singelProductLoader = async ({ params }) => {
  const { result } = await getProduct(params.prodId);
  return result;
};

export default function Product() {
  const product = useLoaderData(); // Load product data via React Router
  const [loading, setLoading] = useState(false); // Manage loading state for adding to cart
  const [isInCart, setIsInCart] = useState(false); // State to check if product is already in the cart
  const navigate = useNavigate();

  // Function to check if the product is in the cart
  const checkIfInCart = () => {
    const cartData = getCartData().cartData; // Fetch cart data from local storage or backend
    const productInCart = cartData.find((item) => item.id === product.id); // Check if the product is in the cart
    if (productInCart) {
      setIsInCart(true); // Update the state if product is already in the cart
    }
  };

  useEffect(() => {
    checkIfInCart(); // Check if the product is in the cart when the component mounts
  }, [product]);

  // Handle adding product to cart
  const handleAddToCart = async () => {
    setLoading(true); // Set loading to true when adding to cart
    await addToCart(product.id); // Call addToCart function (assuming it's an async function)
    setLoading(false); // Set loading to false after adding to cart
    setIsInCart(true); // Mark the product as added to the cart
  };

  return (
    // <div>
    //   <h1>
    //     {product.id}: {product.title}
    //   </h1>
    //   <p>{product.description}</p>
    //   <b>{product.price}$</b>
    //   <br />

    //   {/* Conditionally render buttons based on cart state and loading */}
    //   {loading ? (
    //     <button disabled>Loading...</button>
    //   ) : isInCart ? (
    //     <button disabled>Added to Cart</button> // Disable button if product is in cart
    //   ) : (
    //     <AddCartBtn product={product} onAdd={handleAddToCart}>
    //       Add to cart
    //     </AddCartBtn> // Show "Add to Cart" button if not in cart
    //   )}

    //   <button>Whishlist</button>
    // </div>
    <>
      <div class="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8 ">
        <div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">
              {product.title}
            </h2>
            <p class="mt-2 text-lg">By Luis Vuitton</p>
            <p class="mt-4 mb-8 max-w-md text-gray-500">
              {product.desceiption}
            </p>
            {isInCart ? (
              <AddCartBtn onClick={() => navigate("/cart")}>
                {" "}
                See in Cart{" "}
              </AddCartBtn>
            ) : (
              <AddCartBtn
                onClick={() => handleAddToCart(product.id)}
                href="#"
                class="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition"
              >
                <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                  {" "}
                  Add to Bag now{" "}
                </span>
              </AddCartBtn>
            )}
          </div>

          <div class="order-first ml-auto h-48 w-full bg-transparent sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img class="h-full w-full object-cover" src={product.thumbnail} />
          </div>
        </div>
      </div>
    </>
  );
}
