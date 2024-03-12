import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethod";

export const addCartProduct = createAsyncThunk(
  "addProduct",
  async (data, { rejectWithValue }) => {
    try {
      const res = await userRequest.post(`/cart/${localStorage.getItem("UserId")}/add`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getCartProducts = createAsyncThunk(
  "getProducts",
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const res = await userRequest.get(
        `/cart/${localStorage.getItem("UserId")}`
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCartProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCartProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(addCartProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addProduct, getProducts } = cartSlice.actions;
export default cartSlice.reducer;
