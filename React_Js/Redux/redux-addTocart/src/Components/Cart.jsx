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
    <div className="flex mx-auto p-2  bg-sky-50 h-screen justify-center items-center flex-col gap-5">
      {cart.length > 0 ? (
        cart.map((e, i) => {
          return (
            <div key={i} className="w-1/3 bg-gray-300 relative">
              <span className=" rounded-full bg-black text-white p-2 absolute -top-2 -left-2">
                {e.q}
              </span>
              <div className="w-full flex items-center   gap-4">
                {" "}
                <div className="w-1/3">
                  {" "}
                  <img
                    className="w-full h-full object-cover rounded"
                    src={e.images[1]}
                  ></img>
                </div>
                <div className="w-full">
                  <h1 className="font-bold">{e.title}</h1>
                  <span className="text-black-500">${e.price}</span>
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
              </div>
            </div>
          );
        })
      ) : (
        <p>Your Cart Is empty!!!!</p>
      )}
    </div>
  );
}
