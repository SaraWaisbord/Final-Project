import dataDetails from "../../data/products";
import { REDUCE_FROM_INVENTORY, ADD_TO_INVENTORY } from "../actions/actionType";

const initialState = {
  products: dataDetails,
};

const updateInventory = (products, productId, quantityChange) => {
    return products.map((product) => {
      if (product.id === productId) {
        const updatedInventory = product.inventory + quantityChange;
        return {
          ...product,
          inventory: updatedInventory,
          soldOut: updatedInventory <= 0
        };
      }
      return product;
    });
  };
  
  

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUCE_FROM_INVENTORY:
      return {...state,
        products: updateInventory(state.products, action.payload.product.id, -action.payload.quantity)};
    case ADD_TO_INVENTORY:
      return {...state,
        products: updateInventory(state.products, action.payload.product.id, action.payload.quantity)};
    default:
      return state;
  }
};
