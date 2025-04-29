
import {createStore,combineReducers, applyMiddleware} from 'redux';
import { productReducer } from '../reducers/productReducer';
import { createStoreHook } from 'react-redux';
import {cartReducer} from '../reducers/cartReducer';
const rootReducers = combineReducers({
    products:productReducer,
    cart:cartReducer,
});
const store  = createStore(rootReducers);
// const store = createStore(rootReducers,applyMiddleware(formMiddlware));
export default store;