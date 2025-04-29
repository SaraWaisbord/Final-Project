
import dataDetails from "../../data/products"
const initialState={
    products:dataDetails,
}

export const productReducer = (state = initialState,action)=>{
    console.log(action.payload);
    switch(action.type){
        default:
            return state;
    }
}
