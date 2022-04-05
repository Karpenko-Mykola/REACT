import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./reducers/dialog-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
let store = createStore(reducers);
window.store = store

export default store;