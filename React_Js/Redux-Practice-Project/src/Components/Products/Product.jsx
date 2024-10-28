import { Button, Input, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, addQt, removeQt } from "../../features/Cartslice";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Find the product based on the ID
  const data = products.find((item) => item.id == id);
  console.log(data);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);
  data;
  // Early return to prevent rendering null values
  if (!product) {
    return (
      <div className="flex justify-center items-center w-full h-svh">
        <p className="text-3xl font-bold">Loading........</p>
      </div>
    );
  }

  const isProductInCart = (id) => {
    return cart.some((item) => item.id == id);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={product.images[0] || product.thumbnail}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4 bg-white"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <img
                src={product.thumbnail}
                alt="Thumbnail 1"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">
              {product.title || "Title"}
            </h2>
            <p className="text-gray-600 mb-4">
              SKU: {product.sku || "WH1000XM4"}
            </p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                ${product.price || "354"}
              </span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>
            {/* Rating Section */}
            <div className="flex items-center mb-4">
              {/* SVG Rating Stars */}
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews.length} reviews)
              </span>
            </div>
            <p className="text-gray-700 mb-6">
              {product.description || "Lorem ipsum..."}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Category: {product.category}
              </h3>
            </div>

            <div className="mb-6"></div>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => dispatch(addItem(product))}
                disabled={isProductInCart(product.id)}
                className={`bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isProductInCart(
                  product.id
                )} ?  cursor-not-allowed `}
              >
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul class="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
