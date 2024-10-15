import React, { useState, useEffect } from "react";
import { addToCart, getCartData, getProduct } from "../services";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import AddCartBtn from "./AddCartBtn";

// Loader for fetching a single product based on product ID
export const singelProductLoader = async ({ params }) => {
  const { result } = await getProduct(params.prodId);

  return result;
};

export default function Product() {
  const product = useLoaderData();

  const isProductInCart = (prodId) => {
    const cartItems = getCartData().cartData;
    return cartItems.some((item) => item.id === prodId);
  };

  return (
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
            <AddCartBtn
              product={product}
              disabled={isProductInCart(product.id)} // Disable if already in cart
            >
              Add To Cart
            </AddCartBtn>
          </div>

          <div class="order-first ml-auto h-48 w-full bg-transparent sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img class="h-full w-full object-cover" src={product.thumbnail} />
          </div>
        </div>
      </div>
    </>
  );
}
