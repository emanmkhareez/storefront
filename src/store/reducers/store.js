import { createStore, combineReducers } from "redux";
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


const reducers = combineReducers({ categories: categoryReducer, products: productsReducer, cart: cartReducer });

function store() {
  return createStore(reducers, applyMiddleware(thunk));
}
export default store();