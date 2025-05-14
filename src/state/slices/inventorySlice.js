// features/inventory/inventorySlice.js
import { createSlice } from '@reduxjs/toolkit';
import dataDetails from "../../data/products";

const initialState = {
  products: dataDetails,
};

const updateInventory = (products, productId, quantityChange) =>
  products.map(product =>
    product.id === productId
      ? {
          ...product,
          inventory: product.inventory + quantityChange,
          soldOut: product.inventory + quantityChange <= 0,
        }
      : product
  );

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    reduceFromInventory: (state, action) => {
      const { product, quantity } = action.payload;
      state.products = updateInventory(state.products, product.id, -quantity);
    },
    addToInventory: (state, action) => {
      const { product, quantity } = action.payload;
      state.products = updateInventory(state.products, product.id, quantity);
    },
  },
});

export const { reduceFromInventory, addToInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
