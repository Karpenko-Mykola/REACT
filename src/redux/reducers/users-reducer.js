const CHANGE_FOLLOWING = "CHANGE_FOLOWING";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SAT_CURRENT_PAGE = "SAT_CURRENT_PAGE";


let initialState = {
    pageSize: 10,
    totalCount: 0,
    page: 2,
    users: [],
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
                users: [ ...action.users]
            }
        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalCount: action.count,
            }
        case SAT_CURRENT_PAGE:
            return{
                ...state,
                page: action.page,
            }
        default:
            return state;
    }
}
export const setTotalCountAC = (count) => ({type: SET_TOTAL_COUNT , count})
export const followChangeActionCreator = (id) => ({type: CHANGE_FOLLOWING, id});
export const setUsersAC = (users) => ({type: SET_USERS , users})
export const setCurrentPageAC = (page) => ({type: SAT_CURRENT_PAGE, page})