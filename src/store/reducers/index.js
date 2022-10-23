import Reducer1 from "./reducers";
import UserReducer from "./user_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    reducer1: Reducer1,
    user_reducer: UserReducer
})
 
export default rootReducer;