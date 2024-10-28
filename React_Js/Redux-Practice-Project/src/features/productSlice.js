import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  const data = await response.data.products;
  return data;
});

export const productReducer = createSlice({
  name: "product",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    deleteProduct: (state, action) => {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = updatedProducts;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    updateProduct: (state, action) => {
      let index = state.products.findIndex(
        (product) => product.id == action.payload.id
      );
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = "something went wrong";
    });
  },
});

export default productReducer.reducer;
export const { addProduct, deleteProduct, updateProduct } =
  productReducer.actions;
