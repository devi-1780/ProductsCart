import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    removeAllItems: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
