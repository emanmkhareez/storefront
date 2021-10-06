import { createStore, combineReducers } from "redux";
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

//this method to extend redux with custom functionallity 
// this provide a third party extention  point between dispatch  an action 
// and the momment it reaches  the reducer 
import { applyMiddleware } from "redux";
//  to defined  asynchronous action creator  in your app
// creator to return a function instead of an action object
import thunk from "redux-thunk";
//helpful tools to see the redux on browser 
import { composeWithDevTools } from 'redux-devtools-extension';

//use combineReducers because we have multi reducer
const reducers = combineReducers({ categories: categoryReducer, products: productsReducer, cart: cartReducer });

function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
export default store();