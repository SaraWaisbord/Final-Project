
import {ADD_TO_CART,REMOVE_FROM_CART,REMOVE_TO_MY_DREAMS_LIST} from "../actions/actionType"

const initialState={
    products:[],
}


export const cartReducer = (state = initialState,action)=>{
    console.log(action.payload);
    
    switch(action.type){
        case ADD_TO_CART: {
          const { product, quantity } = action.payload;
          const existingProduct = state.products.find(p => p.product.id === product.id);
          if (existingProduct) {
            return {...state,products: state.products.map(p =>p.product.id === product.id
                  ? { ...p, quantity: p.quantity + quantity }
                  : p
              )
            };
          } else {
            return {...state,products: [...state.products, { product, quantity }]};
          }
        }
        case "DECREASE_PRODUCT_QUANTITY": {
          const { product, quantity } = action.payload;
          return {...state,products: state.products.map(p =>p.product.id === product.id
                  ? { ...p, quantity: p.quantity - quantity }
                  : p
              )
              .filter(p => p.quantity > 0) 
          };
        }
          
        case REMOVE_FROM_CART:
          return {...state, products: state.products.filter((p) => p.product.id !== action.payload.id
)
          };
      
        case REMOVE_TO_MY_DREAMS_LIST:
            return {...state, products: state.products.filter((p) => p.product.id !== action.payload.id)}
        default:
            return state;
    }
}
