// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';
import inventorySlice from '../slices/inventorySlice';
import productSlice from '../slices/productSlice';
const store = configureStore({
  reducer: {
    cart: cartSlice,
    inventory: inventorySlice,
    products: productSlice,
  },
});

export default store;
