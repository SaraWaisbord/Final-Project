
import dataDetails from "../../data/products"
import { REDUCE_FROM_INVENTORY ,ADD_TO_INVENTORY} from "../actions/actionType";
//console.log(dataDetails);
const initialState={
    products:dataDetails,
}

export const productReducer = (state = initialState,action)=>{
    console.log(action.payload);
    //var e=state.products.find((product) =>product.id== action.payload.product.id)
    //console.log("--"+e.inventory);
    switch(action.type){
        case REDUCE_FROM_INVENTORY:
           const p= state.products.find((product) =>product.id== action.payload.product.id);
           p.inventory-=action.payload.quantity;
           state.products=state.products.filter((product) => product.id != action.payload.id);
           if(p.inventory<=0)
                p.soldOut=true;
           state.products.concat(p);
           //var e=state.products.find((product) =>product.id== action.payload.product.id);
           //console.log(e.inventory);
            return {...state, products: state.products}
            case ADD_TO_INVENTORY:
                const pr= state.products.find((product) =>product.id== action.payload.product.id);
                pr.inventory+=action.payload.quantity;
                state.products=state.products.filter((product) => product.id != action.payload.id);
                if(pr.inventory>0)
                     pr.soldOut=false;
                state.products.concat(pr);
                return {...state, products: state.products}
        default:
            return state;
    }
}
