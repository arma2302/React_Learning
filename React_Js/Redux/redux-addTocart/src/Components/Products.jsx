import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, fetchProducts } from "../features/Cartslice";
import { Link, useNavigate } from "react-router-dom";
import AlertPopup from "./AlertPopup";
export default function Products() {
  const [alert, setAlert] = useState(false);
  const [cartLn, setCartLn] = useState(0);
  const dispatch = useDispatch();

  //get all the products from store
  const products = useSelector((state) => {
    return state.product.products;
  });
  //get all the products of cart
  const cart = useSelector((state) => {
    return state.product.cart;
  });
  // fetch all the products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // add to cart
  const addToCart = (id) => {
    setAlert(true);
    dispatch(addItem(id));
  };
  //close popup

  const handlePOPup = (isAlertopen) => {
    setAlert(isAlertopen);
  };
  // to check wheater  the product is in cart or not
  const isProductInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  // how many products are there in cart
  useEffect(() => {
    setCartLn(cart.length);
  }, [cart]);
  return (
    <div>
      {alert && <AlertPopup setAlert={handlePOPup} />}
      <nav className="text-2xl text-center p-2 bg-gray-100">
        <Link to={"/cart"}>Cart({cartLn})</Link>
      </nav>

      <div className="flex justify-between items-center flex-wrap gap-2 mx-auto mt-10 px-4">
        {products &&
          products.map((e, i) => {
            return (
              <div key={i} className="w-1/5 bg-gray-100 p-2">
                <img
                  className="w-full h-full object-cover "
                  src={e.images[0]}
                ></img>
                <h1>{e.title}</h1>
                <button
                  onClick={() => addToCart(e)}
                  className={`text-sm rounded px-4 ${
                    isProductInCart(e.id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-violet-400"
                  }`}
                  disabled={isProductInCart(e.id)}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
