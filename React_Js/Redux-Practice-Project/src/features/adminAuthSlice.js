import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {
    username: "arma@23",
    password: "admin",
  },
  isAuthenticated: false, // Track authentication status
};

const adminAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      if (
        state.admin.username === action.payload.username &&
        state.admin.password === action.payload.password
      ) {
        state.isAuthenticated = true; // Set authentication flag
      } else {
        state.isAuthenticated = false; // Handle failed login
      }
    },

    adminLogout: (state) => {
      state.isAuthenticated = false; // Reset authentication flag
    },
  },
});

export const { adminLogin, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
