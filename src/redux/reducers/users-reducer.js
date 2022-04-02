const CHANGE_FOLLOWING = "CHANGE_FOLOWING";
const SET_USERS = "SET_USERS"


let initialState = {
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
            debugger
            return {
                users: [...state.users, ...action.users]

            }
        default:
            return state;
    }
}

export const followChangeActionCreator = (id) => ({type: CHANGE_FOLLOWING, id});
export const setUsersAC = (users) => ({type: SET_USERS , users})