import { configureStore } from "@reduxjs/toolkit";
import authSlice, { authReducer } from "../features/authSlice";
import productSlice from "../features/productSlice";
import adminAuthSlice from "../features/adminAuthSlice";
import Cartslice from "../features/Cartslice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminAuthSlice,
    products: productSlice,
    cart: Cartslice,
  },
});
