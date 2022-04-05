import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./reducers/dialog-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {usersReducer} from "./reducers/users-reducer";

let reducers = combineReducers({dialogsPage: dialogReducer, profilePage: profileReducer, usersPage: usersReducer});
let store = createStore(reducers);
window.store = store

export default store;