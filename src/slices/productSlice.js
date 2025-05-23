import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { addProducts, getProduct } = productSlice.actions;
export default productSlice.reducer;
