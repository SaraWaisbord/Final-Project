// features/products/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dataDetails from "../../data/products";

const initialState = {
  products: dataDetails,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
