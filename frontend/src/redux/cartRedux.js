import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethod";

export const addCartProduct = createAsyncThunk(
  "addProduct",
  async (data, { rejectWithValue }) => {
    try {
      const res = await userRequest.post(
        `/cart/${localStorage.getItem("UserId")}/`,
        data
      );
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getCartProducts = createAsyncThunk(
  "getProducts",
  async (_, { rejectWithValue }) => {
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
export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (data, { rejectWithValue }) => {
    console.log(data.method);
    try {
      await userRequest.put(
        `/cart/${localStorage.getItem("UserId")}?itemIdx=${
          data.itemIdx
        }&method=${data.method}`
      );
      return { itemIdx: data.itemIdx, method: data.method };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (data, { rejectWithValue }) => {
    try {
      await userRequest.delete(
        `/cart/${localStorage.getItem("UserId")}?itemIdx=${data.itemIdx}`
      );
      return { index: data.itemIdx };
    } catch (error) {
      console.log(error);
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
    builder
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.method === "ADD") {
          state.products[action.payload.itemIdx].quantity++;
        } else {
          state.products[action.payload.itemIdx].quantity--;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;

        state.products = state.products.filter(
          (_, index) => index !== Number(action.payload.index)
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addProduct, getProducts } = cartSlice.actions;
export default cartSlice.reducer;
