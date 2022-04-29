import React, {useEffect} from "react"
import s from "./App.module.css"
import {Routes, Route, Navigate} from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ProfileContainer from "../Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {isAuthorizedThunk} from "../../Redux/reducers/auth-reducer";
import Preloader from "../Preloader/Preloader";
import Auth from "../Auth/Auth";
import UsersRouterContainer from "../UsersRouterContainer/UsersRouterContainer";
import Settings from "../Settings/Settings";

const AppContainer = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector((state) => state.auth.isInitialized)

    useEffect(() => {
            dispatch(isAuthorizedThunk())
        }
        , [dispatch])

    if (isInitialized) return <div><Preloader/></div>
    return <App/>
}
export default AppContainer

const App = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <div className={s.body}>
                <Sidebar/>
                <div className={s.content}>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/auth" element={<Auth/>}/>
                        <Route path="/users/:userID" element={<UsersRouterContainer/>}/>
                        <Route path="/users" element={<UsersRouterContainer/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
