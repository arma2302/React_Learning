import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "productsSlice/getProducts",
  async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    console.log(response.data);

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

export const deleteProduct = createAsyncThunk("delete", async (id) => {
  const response = await axios.delete(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  return id;
});

const initialState = {
  productsData: [],
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
    builder.addCase(getProduct.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.productsData = state.productsData.filter(
        (item) => item.id != action.payload
      );
    });
  },
});

export default productReducer.reducer;
