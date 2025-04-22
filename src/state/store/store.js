
import {createStore,combineReducers, applyMiddleware} from 'redux';
import { productReducer } from '../reducers/productsReducer';
import { createStoreHook } from 'react-redux';

const rootReducers = combineReducers({
    product:productReducer,

});
const store  = createStore(rootReducers);
// const store = createStore(rootReducers,applyMiddleware(formMiddlware));
export default store;