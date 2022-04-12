import {profileAPI, userAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const POST_INPUT_CHANGE = "POST-INPUT-CHANGE";
const SET_PROFILE = "SET_PROFILE";
const SET_USER_ID = "SET_USER_ID";
const SET_STATUS = "SET_STATUS";

let initialState = {
    status: null,
    profile: null,
    userId: null,
    postData: [
        {id: 4, postText: "My first Post"},
        {id: 3, postText: "My second Post"},
        {id: 2, postText: "Something else"},
        {id: 1, postText: "Repeat"},
    ],
    postAreaValue: "",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_INPUT_CHANGE:
            return {
                ...state,
                postAreaValue: action.newText,
            }
        case ADD_POST:
            let postText = state.postAreaValue;
            let id = state.postData.length + 1;
            return {
                ...state,
                postData: [{id, postText}, ...state.postData],
                postAreaValue: "",
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_ID:
            return {
                ...state,
                userId: action.id,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const addPost = () => ({type: ADD_POST})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const postInputChange = (text) => ({type: POST_INPUT_CHANGE, newText: text})
const setUserId = (id) => ({type: SET_USER_ID, id})

export const getProfileTHUNK = (id) => (dispatch) => {
    dispatch(setUserId(id))
    userAPI.getProfile(id).then(response => {
        dispatch(setProfile(response));
    })
}

export const getStatusTHUNK = (id) => (dispatch) => {
    profileAPI.getStatus(id).then(response => {
            dispatch(setStatus(response.data))
        }
    )
}

export const setStatusTHUNK = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) dispatch(setStatus(status))
    })
}
