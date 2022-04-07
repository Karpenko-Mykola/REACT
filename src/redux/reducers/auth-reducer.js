import {userAPI} from "../../api/api";

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
                isAuth: true,
            }
        default:
            return state
    }
}

export const setUserData = (data) => ({type: SET_USERS_DATA, data})

export const isAuthTHUNK = () => (dispatch) =>{
    userAPI.setAuthData().then(response => {
        if(response.resultCode === 0)
            dispatch(setUserData(response.data));
    })
}
