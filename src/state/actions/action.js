import {ADD_TO_CART,REMOVE_FROM_CART,REMOVE_TO_MY_DREAMS_LIST} from "../actions/actionType"

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
