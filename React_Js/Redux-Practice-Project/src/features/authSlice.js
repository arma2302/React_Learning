import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    users: JSON.parse(localStorage.getItem("users")) || [],
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  },
  reducers: {
    signUp: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    login: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      ); // check if user exists

      if (user) {
        state.currentUser = { ...user, isLoggedIn: true };
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      } else {
        throw new error("invalid username or password");
      }
    },
    logout: (state, action) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export default authReducer.reducer;
export const { signUp, login, logout } = authReducer.actions;
