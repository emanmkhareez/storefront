
import { createStore ,combineReducers } from "redux";
import { ReducerCategories } from "./categories/ReducerCategories";
import {ReducerProduct}from './products/ReducerProducts'

// This dependecyenables the Redux Dev Tools in your chrome console.
import { composeWithDevTools } from "redux-devtools-extension"
// Combine reducers isn't really necessary when you only have one reducer.
// But it's good to have it in case you have multiple reducers.
// And 99.99% of all Redux apps will have more than one reducer.

const reducer=combineReducers({
    ReducerCategories:ReducerCategories,
    ReducerProduct:ReducerProduct

})


const store = () => {
    return createStore(reducer, composeWithDevTools());
}

export default store();