import React from "react";
import { Button, Drawer } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addQt, removeQt } from "../../features/Cartslice";
const CartDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const { cart } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    if (cart) {
      setLoading(false);
    }
  };
  return (
    <>
      <NavLink type="primary" onClick={showLoading}>
        Open Drawer
      </NavLink>
      <Drawer
        closable
        destroyOnClose
        placement="right"
        open={open}
        loading={loading}
        onClose={() => {
          setOpen(false);
        }}
        width={"40%"}
      >
        <div className="h-full flex flex-col">
          <div className="w-full bg-white flex flex-col items-center justify-start">
            {cart.length == 0 ? (
              <em> Your Cart Is empty!!</em>
            ) : (
              <em>Your cart</em>
            )}
            {cart.map((e, i) => {
              return (
                <div
                  className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0 bg-gray-200 w-full p-2"
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
                        <div className="flex items-center">
                          <span
                            className="cursor-pointer p-2"
                            onClick={() => dispatch(addQt(e.id))}
                          >
                            +
                          </span>
                          <span className="mx-2">{e.q}</span>
                          <span
                            className="cursor-pointer p-2"
                            onClick={() => dispatch(removeQt(e.id))}
                          >
                            -
                          </span>
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
                        type="button"
                        onClick={() => dispatch(removeQt(e.id))}
                        className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-auto w-full bg-gray-200 p-6 flex justify-between">
            <p className="font-bold text-xl">Total: {total} </p>
            <Button className="p-4 bg-orange-700  text-xl">Checkout</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default CartDrawer;
