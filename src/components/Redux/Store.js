import { createStore ,combineReducers } from "redux";
import { ReducerCategories } from "./categories/ReducerCategories";

const reducer=combineReducers({
    ReducerCategories:ReducerCategories

})
function Store(){
    return createStore(reducer)

}
export default Store