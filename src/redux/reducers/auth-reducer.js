import {loginAPI, userAPI} from "../../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setUserData = (data, isAuth) => ({type: SET_USERS_DATA, data, isAuth})

export const isAuthTHUNK = () => (dispatch) => {
    return userAPI.setAuthData().then(response => {
        if (response.resultCode === 0)
            dispatch(setUserData(response.data, true));
    })
}

export const loginTHUNK = (data) => (dispatch) => {
    let email = data.email, password = data.password, rememberMe = data.rememberMe
    loginAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0)
            dispatch(isAuthTHUNK())
    })
}

export const logoutTHUNK = () => (dispatch) => {
    loginAPI.logout().then(response => {
        if (response.data.resultCode === 0)
        dispatch(setUserData({
            id: null,
            email: null,
            login: null,
        }, false))
    })
}