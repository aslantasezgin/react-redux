import { combineReducers } from "redux"
import countReducer from "./countReducer"
import userReducer from "./userReducer"







const reducer = combineReducers({
    count : countReducer,
    user: userReducer
})

export default reducer