
import {createStore,combineReducers, applyMiddleware} from 'redux';
import { productReducer } from '../reducers/productReducer';
import { createStoreHook } from 'react-redux';

const rootReducers = combineReducers({
    products:productReducer,

});
const store  = createStore(rootReducers);
// const store = createStore(rootReducers,applyMiddleware(formMiddlware));
export default store;