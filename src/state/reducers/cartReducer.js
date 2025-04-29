
import {ADD_TO_CART,REMOVE_FROM_CART,REMOVE_TO_MY_DREAMS_LIST} from "../actions/actionType"

const initialState={
    products:[],
}


export const cartReducer = (state = initialState,action)=>{
    console.log(action.payload);
    
    switch(action.type){
        //גם פה - שלא יראו שוב ושוב את אותו מוצרררר הוספת שדה כמות מקווה שזה OK🤗🤗

        case ADD_TO_CART: {
          const { product, quantity } = action.payload;
          const existingProduct = state.products.find(p => p.product.id === product.id);
        
          if (existingProduct) {
            return {
              ...state,
              products: state.products.map(p =>
                p.product.id === product.id
                  ? { ...p, quantity: p.quantity + quantity }
                  : p
              )
            };
          } else {
            return {
              ...state,
              products: [...state.products, { product, quantity }]
            };
          }
        }
          
          
        case REMOVE_FROM_CART:
            return {...state, products: state.products.filter((product) => product.id != action.payload.id)}
        case REMOVE_TO_MY_DREAMS_LIST:
            return {...state, products: state.products.filter((product) => product.id != action.payload.id)}
        default:
            return state;
    }
}
