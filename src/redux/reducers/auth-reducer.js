import {LoginAPI} from "../../api/api";

const Auth_SET_USERS_DATA = "Auth_SET_USERS_DATA"
const Auth_SET_Initialized = "Auth_SET_Initialized"
const Auth_Reset_Users_Data = "Auth_Reset_Users_Data"
const Auth_SET_CaptchaUrl = 'Auth_SET_CaptchaUrl'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false,
    isInitialized: true,
    captchaUrl: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Auth_SET_USERS_DATA :
            return {
                ...state,
                ...action.payload,
                isAuthorized: true
            }
        case Auth_SET_Initialized:
            return {
                ...state,
                isInitialized: false,
            }
        case Auth_Reset_Users_Data:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuthorized: false,
            }
        case Auth_SET_CaptchaUrl:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

const setUsersData = (payload) => ({type: Auth_SET_USERS_DATA, payload})
const setInitialized = () => ({type: Auth_SET_Initialized})
const resetUsersData = () => ({type: Auth_Reset_Users_Data})
const setCaptchaUrl = (captchaUrl) => ({type: Auth_SET_CaptchaUrl, captchaUrl})

export const isAuthorizedThunk = () => (dispatch) => {
    LoginAPI.me().then((response) => {
        if (response.resultCode === 0)
            dispatch(setUsersData(response.data))
        dispatch(setInitialized())

    })
}

export const loginThunk = (loginObj) => (dispatch) => {
    LoginAPI.login(loginObj).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(isAuthorizedThunk())
            dispatch(setCaptchaUrl(null))
        }
        if (response.data.resultCode === 10)
            dispatch(getCaptchaUrlThunk())
    })
}

export const logOutThunk = () => (dispatch) => {
    LoginAPI.logout()
    dispatch(resetUsersData())
}

export const getCaptchaUrlThunk = () => (dispatch) => {
    LoginAPI.getCaptcha().then(response =>
        dispatch(setCaptchaUrl(response.data.url)))
}

