import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import authReducer from "./authslice.js";
const store = configureStore({
  reducer: {
    gioHang:cartReducer,
    auth: authReducer
  },
})

export default store;