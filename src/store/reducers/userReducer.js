import { SET_USERNAME } from "../actionTypes/userActionTypes"


const initialUserState={
    userName:0
}

function userReducer(state = initialUserState,action){
    switch(action.type){
        case SET_USERNAME:
        return {userName: action.payload}
        default:
        return state
    }

}


export default userReducer