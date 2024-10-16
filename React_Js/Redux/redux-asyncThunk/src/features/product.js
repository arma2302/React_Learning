import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProduct = createAsyncThunk("singleProduc", async ({ id }) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  console.log(response.data);

  return response.data;
});

const initialState = {
  productsData: [],
  error: null,
  loading: false,
};
export const singleProductReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload, "jhagyuah");
      state.productsData = action.payload;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = "eroor";
    });
  },
});
export default singleProductReducer.reducer;
