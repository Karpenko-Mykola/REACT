import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";
import thunk from "redux-thunk";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    main: appReducer,
    users: usersReducer
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.store = store