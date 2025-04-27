
import {ADD_TO_CART,REMOVE_FROM_CART,REMOVE_TO_MY_DREAMS_LIST} from "../actions/actionType"


const initialState={
    products:[],
}


export const cartReducer = (state = initialState,action)=>{
    console.log(action.payload);
    switch(action.type){
        case ADD_TO_CART:
            return { ...state,  products: state.products.concat(action.payload) }
        case REMOVE_FROM_CART:
            return {...state, products: state.products.filter((product) => product.id != action.payload.id)}
        case REMOVE_TO_MY_DREAMS_LIST:
            return {...state, products: state. products.filter((product) => product.id != action.payload.id)}
        default:
            return state;
    }
}
