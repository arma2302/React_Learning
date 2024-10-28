import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: 0,
};

export const cartReducer = createSlice({
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
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addQt: (state, action) => {
      state.cart = state.cart.map((item, i) => {
        if (item.id === action.payload) {
          item.q = item.q + 1;
          return item;
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      });
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

export default cartReducer.reducer;
export const { addItem, removeItem, addQt, removeQt, getTotal } =
  cartReducer.actions;
