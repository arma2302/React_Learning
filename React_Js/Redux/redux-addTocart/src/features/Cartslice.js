import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: null,
};

export const productReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        console.log("Already in cart");
      } else {
        state.cart.push({ ...action.payload, q: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    addQt: (state, action) => {
      state.cart = state.cart.map((item, i) => {
        if (item.id === action.payload) {
          item.q = item.q + 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeQt: (state, action) => {
      state.cart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            item.q--;
          }
          return item;
        })
        .filter((item) => item.q !== 0);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getTotal: (state, action) => {
      state.total = state.cart.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.q;
      }, 0);
    },
  },
});

export default productReducer.reducer;
export const { addItem, addQt, removeQt, getTotal } = productReducer.actions;
