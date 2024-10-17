import { configureStore } from "@reduxjs/toolkit";
import Cartslice, { productReducer } from "../features/Cartslice";

export const store = configureStore({
  reducer: {
    product: Cartslice,
  },
});
