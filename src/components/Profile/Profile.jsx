import React, {useEffect} from "react";
import s from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../Redux/reducers/users-reducer";
import noAva from "../../Images/depositphotos_227725120-stock-illustration-image-available-icon-flat-vector.jpg";
import Preloader from "../Preloader/Preloader";
import {Navigate} from "react-router-dom";

const ProfileContainer = () => {
    const isAuth = useSelector((state) => state.auth.isAuthorized)
    if (!isAuth) return <Navigate to={"/auth"}/>
    return <Profile/>
}
export default ProfileContainer


const Profile = () => {
    const userId = useSelector((state) => state.auth.id)
    const myProfile = useSelector((state) => state.users.profile)
    const status = useSelector((state) => state.users.myStatus)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProfile(userId))
    }, [dispatch])

    useEffect(() => {
        dispatch(getStatus(userId))
    }, [dispatch])


    if (!myProfile) return <div className={s.preloader}><Preloader/></div>

    return (
        <div className={s.wrapper}>
            <img src={myProfile.photos.large || noAva} alt={myProfile.fullName}/>
            <div className={s.descr}>
                <h1>{myProfile.fullName}</h1>
                <p>{status}</p>
                <p> Something about me : {(myProfile.aboutMe) ? myProfile.aboutMe : "..."}</p>
            </div>
        </div>
    )
}
