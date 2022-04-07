import {userAPI} from "../../api/api";

const CHANGE_FOLLOWING = "CHANGE_FOLOWING";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SAT_CURRENT_PAGE = "SAT_CURRENT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_FOLLOW_PROGRESS = "TOGGLE_FOLLOW_PROGRESS";


let initialState = {
    pageSize: 5,
    totalCount: 0,
    page: 1,
    users: [],
    isFetching: false,
    followedUsers: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    } else
                        return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count,
            }
        case SAT_CURRENT_PAGE:
            return {
                ...state,
                page: action.page,
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                followedUsers: (action.inProgress) ? [...state.followedUsers, action.id]
                    : state.followedUsers.filter(id => id != action.id),
            }
        default:
            return state;
    }
}

export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const followChange = (id) => ({type: CHANGE_FOLLOWING, id});
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SAT_CURRENT_PAGE, page})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowProgress = (inProgress, id) => ({type: TOGGLE_FOLLOW_PROGRESS, inProgress, id})

export const getUsersTHUNK = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setUsers([]));
        dispatch(toggleFetching(true));
        userAPI.getUsers(page, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setCurrentPage(page));
            dispatch(setTotalCount(response.totalCount));
            dispatch(toggleFetching(false));
        })
    }
}

export const followTHUNK = (followed, id) => (dispatch) => {
    dispatch(toggleFollowProgress(true, id));
    userAPI.follow(followed, id).then(response => {
        if (response.resultCode === 0)
            dispatch(followChange(id))
        dispatch(toggleFollowProgress(false, id));
    })
}
