import { configureStore } from "@reduxjs/toolkit";
import productSLice from "../features/productSLice";
import { singleProductReducer } from "../features/product";

export const store = configureStore({
  reducer: {
    reducer: productSLice,
    product: singleProductReducer,
  },
});
