export const SET_USERNAME ="SET_USERNAME";

export const setUserName = (name) => {
    return{
        type:SET_USERNAME,
        payload:name

    }
}