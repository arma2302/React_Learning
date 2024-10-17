import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "productsSlice/getProducts",
  async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );

    return response.data;
  }
);
export const getProduct = createAsyncThunk("singleProduc", async (id) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  console.log(response.data);

  return response.data;
});

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) | [],
  error: null,
  loading: false,
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.products = action.payload;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = "eroor";
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default productReducer.reducer;
