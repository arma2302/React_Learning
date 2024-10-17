import { configureStore } from "@reduxjs/toolkit";
import Cartslice, { productReducer } from "../features/Cartslice";
import ProductSlice from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    product: Cartslice,
    list: ProductSlice,
  },
});
