const CHANGE_FOLLOWING = "CHANGE_FOLOWING";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SAT_CURRENT_PAGE = "SAT_CURRENT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";


let initialState = {
    pageSize: 4,
    totalCount: 0,
    page: 1,
    users: [],
    isFetching: false,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, isFollow: !u.isFollow}
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
        default:
            return state;
    }
}
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const followChange = (id) => ({type: CHANGE_FOLLOWING, id});
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SAT_CURRENT_PAGE, page})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})