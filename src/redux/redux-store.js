import {combineReducers, createStore, applyMiddleware} from "redux";
import {dialogReducer} from "./reducers/dialog-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleWare from "redux-thunk"
import {mainReducer} from "./reducers/main-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: mainReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store

export default store;