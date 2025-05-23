import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import toggleReducer from "../slices/toggleSlice";
import userReducer from "../slices/userSlice";
import gridReducer from "../slices/gridShowSlice";
import cartReducer from "../slices/cartSlice";
const appStore = configureStore({
  reducer: {
    products: productReducer,
    toggle: toggleReducer,
    user: userReducer,
    grid: gridReducer,
    cart: cartReducer,
  },
});

export default appStore;
