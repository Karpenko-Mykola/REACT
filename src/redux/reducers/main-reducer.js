import {isAuthTHUNK} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
    initialized: false,
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: !state.initialized
            }
        default:
            return state
    }
}

export const toggleInitializedProgress = () => ({type: SET_INITIALIZED})

export const initializedTHUNK = () => (dispatch) => {
    dispatch(toggleInitializedProgress())
    dispatch(isAuthTHUNK()).then(() =>
    dispatch(toggleInitializedProgress()))
}