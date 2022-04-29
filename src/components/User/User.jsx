import React, {useEffect} from "react";

import s from './User.module.css'
import {getProfile} from "../../Redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";

const User = ({userId}) => {
    const dispatch = useDispatch()
    const userProfile = useSelector((state) => state.users.profile)

    useEffect(() => {
        dispatch(getProfile(userId))
    }, [dispatch])


    if (!userProfile) return <div className={s.preloader}><Preloader/></div>
    return (
        <div>
            <h1>{userProfile.fullName}</h1>
        </div>
    )
}

export default User