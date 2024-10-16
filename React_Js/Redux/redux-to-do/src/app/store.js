import { configureStore } from "@reduxjs/toolkit";
import todoSlice, { todoReducer } from "../features/todoSlice";

export const store = configureStore({
  reducer: todoSlice,
});
