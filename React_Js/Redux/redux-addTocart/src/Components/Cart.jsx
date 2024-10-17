import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQt, getTotal, removeQt } from "../features/Cartslice";

export default function Cart() {
  const [total, setTotal] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.product.cart;
  });

  const totalPrice = useSelector((state) => state.product.total);

  useEffect(() => {
    setTotal(totalPrice);
    dispatch(getTotal());
  }, [total, cart]);

  return (
    <div className="flex mx-auto p-2  bg-sky-50 h-screen justify-center items-center">
      {cart.length > 0 ? (
        cart.map((e, i) => {
          return (
            <div key={i} className="w-full">
              <div className="w-full flex justify-start items-center">
                {" "}
                <img
                  className="w-20 h-full object-cover rounded"
                  src={e.images[1]}
                ></img>
                <h1>
                  {e.title}:q:{e.q}
                </h1>
              </div>
              <div className="mt-4 w-full ">
                <button
                  className="bg-gray-300 px-2 mr-2"
                  onClick={() => dispatch(addQt(e.id))}
                >
                  +{e.q}+
                </button>
                <button
                  className="bg-gray-300 px-2"
                  onClick={() => dispatch(removeQt(e.id))}
                >
                  -1-
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Your Cart Is empty!!!!</p>
      )}

      <p>Total : {totalPrice}</p>
    </div>
  );
}
