import { SET_USERNAME } from "../actionTypes/userActionTypes"

export const setUserName = (name) => {
    return{
        type:SET_USERNAME,
        payload:name

    }
}