
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      console.log('Adding product to cart:', action.payload);
      // Check if the product already exists in the cart
      
      const { product, quantity } = action.payload;
      const existingProduct = state.products.find(p => p.product.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({ product, quantity });
      }
    },
    decreaseProductQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      state.products = state.products
        .map(p =>
          p.product.id === product.id
            ? { ...p, quantity: p.quantity - quantity }
            : p
        )
        .filter(p => p.quantity > 0);
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(p => p.product.id !== action.payload.id);
    },
    removeToMyDreamsList: (state, action) => {
      state.products = state.products.filter(p => p.product.id !== action.payload.id);
    },
  },
});

export const {
  addProductToCart,
  decreaseProductQuantity,
  removeProductFromCart,
  removeToMyDreamsList,
} = cartSlice.actions;

export default cartSlice.reducer;
