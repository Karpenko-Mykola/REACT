import {FollowApi, ProfileAPI, UsersAPI} from "../../api/api";

const Users_Set_Users = "Users_Set_Users"
const Users_Set_Profile = "Users_Set_Profile"
const Users_Set_Status = "Users_Set_Status"
const users_Toggle_Following = "users_Toggle_Following"
const USERS_TOGGLE_FOLLOW_PROGRESS = "USERS_TOGGLE_FOLLOW_PROGRESS";
const Users_Set_TotalUsersCount = "Users_Set_TotalUsersCount"
const Users_Set_Current_page = "Users_Set_Current_page"
const Users_Set_New_Photo = "Users_Set_New_Photo"
const Users_Set_New_Status = "Users_Set_New_Status"
const Users_Set_Initial_Status = "Users_Set_Initial_Status"

let initialState = {
    users: [],
    profile: null,
    myStatus: "",
    disabledButton: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    portionSize: 5,
    initialStatus: null,
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Users_Set_Users:
            return {
                ...state,
                users: [...action.users]
            }
        case Users_Set_Profile:
            return {
                ...state,
                profile: action.profile
            }
        case Users_Set_Status:
            return {
                ...state,
                myStatus: action.status
            }
        case users_Toggle_Following:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    } else
                        return u
                })
            }
        case USERS_TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                disabledButton: (action.inProgress) ? [...state.disabledButton, action.id]
                    : state.disabledButton.filter(id => id !== action.id),
            }
        case Users_Set_TotalUsersCount:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case Users_Set_Current_page:
            debugger
            return {
                ...state,
                currentPage: action.page
            }
        case Users_Set_New_Photo:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        case Users_Set_New_Status:
            return {
                ...state,
                myStatus: action.status
            }
        case Users_Set_Initial_Status:
            debugger
            return {
                ...state,
                initialStatus: action.success
            }
        default:
            return state
    }
}

const setUser = (users) => ({type: Users_Set_Users, users})
const setProfile = (profile) => ({type: Users_Set_Profile, profile})
const setStatus = (status) => ({type: Users_Set_Status, status})
const toggleFollowing = (id) => ({type: users_Toggle_Following, id})
const toggleFollowProgress = (inProgress, id) => ({type: USERS_TOGGLE_FOLLOW_PROGRESS, inProgress, id})
const setTotalUsersCount = (totalCount) => ({type: Users_Set_TotalUsersCount, totalCount})
export const setCurrentPage = (page) => ({type: Users_Set_Current_page, page})
const setNewProfilePhoto = (photos) => ({type: Users_Set_New_Photo, photos})
const setNewStatus = (status) => ({type: Users_Set_New_Status, status})
const setInitialStatus = (success) => ({type: Users_Set_Initial_Status, success })

export const getUsersThunk = (pageSize, currentPage) => (dispatch) => {
    dispatch(setUser([]))
    UsersAPI.getUsers(pageSize, currentPage).then(response => {
        if (response.status === 200) {
            dispatch(setUser(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
        }
    })
}

export const getProfile = (id) => (dispatch) => {
    UsersAPI.getProfile(id).then(response =>
        dispatch(setProfile(response.data)))
}

export const getStatus = (id) => (dispatch) => {
    UsersAPI.getStatus(id).then(response =>
        dispatch(setStatus(response.data)))
}

export const followThunk = (id) => (dispatch) => {
    dispatch(toggleFollowProgress(true, id));
    FollowApi.follow(id).then(response => {
        if (response.data.resultCode === 0)
            dispatch(toggleFollowing(id))
        dispatch(toggleFollowProgress(false, id));
    })
}

export const unFollowThunk = (id) => (dispatch) => {
    dispatch(toggleFollowProgress(true, id));
    FollowApi.unfollow(id).then(response => {
        if (response.data.resultCode === 0)
            dispatch(toggleFollowing(id))
        dispatch(toggleFollowProgress(false, id));
    })
}

export const setNewPhoto = (photo) => (dispatch) => {
    ProfileAPI.setAva(photo).then(response => {
        console.log(response)
        dispatch(setNewProfilePhoto(response.data.photos))
    })
}

export const setNewStatusThunk = (status) => (dispatch) => {
    return ProfileAPI.setStatus(status).then(response => {
        if (response.resultCode === 0)
            dispatch(setNewStatus(status))
    })
}

export const setProfileThunk = (obj) => (dispatch) => {
    return ProfileAPI.setProfile(obj).then(response => {
        if(response.data.resultCode === 0)
            dispatch(setInitialStatus(true))
        else
            dispatch(setInitialStatus(false))
    })
}
