
import {createStore,combineReducers, applyMiddleware} from 'redux';
import { productReducer } from '../reducers/productReducer';
// import { persistStore } from 'redux-persist';
import {cartReducer} from '../reducers/cartReducer';
import { inventoryReducer } from '../reducers/inventoryReducer';
const rootReducers = combineReducers({
    products:productReducer,
    cart:cartReducer,
    inventory:inventoryReducer,
});
const store  = createStore(rootReducers);
// const store = createStore(rootReducers,applyMiddleware(formMiddlware));
export default store;