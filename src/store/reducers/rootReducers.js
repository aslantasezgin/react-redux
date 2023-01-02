import { combineReducers } from "redux"



const initialUserState={
    userName:0
}

function userReducer(state = initialUserState,action){
    switch(action.type){
        case "SET_USERNAME":
        return {userName: action.payload}
        default:
        return state
    }

}




const initialState={
    count:0
}

function rootReducer(state = initialState,action){
switch(action.type){
    case "INCREMENT":
        return {count:state.count+action.payload}
    case "DECREMENT":
        return {count:state.count-action.payload}
    default:
        return state
}
}


const reducer = combineReducers({
    count : rootReducer,
    user: userReducer
})

export default reducer