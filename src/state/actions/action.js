import {ADD_TO_CART,REMOVE_FROM_CART,REMOVE_TO_MY_DREAMS_LIST,REDUCE_FROM_INVENTORY, ADD_TO_INVENTORY,DECREASE_PRODUCT_QUANTITY} from "../actions/actionType"

export const addProductToCart = (payload)=>({
    type:ADD_TO_CART,
    payload,
});

export const removeProductFromCart = (payload)=>({
    type:REMOVE_FROM_CART,
    payload,

});

export const removeToMyDreamsList = (payload)=>({
    type:REMOVE_TO_MY_DREAMS_LIST,
    payload,
    
});
export const reduceFromInventory = (payload)=>({
    type:REDUCE_FROM_INVENTORY,
    payload,
    
});
export const addToInventory = (payload)=>({
    type:ADD_TO_INVENTORY,
    payload,
    
});
export const decreaseProductQuantity = (payload)=>({
    type:DECREASE_PRODUCT_QUANTITY,
    payload,
    
});
// export const = () =>({

// })

