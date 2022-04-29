import React from "react";
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return(
        <div className={s.wrapper}>
            <NavLink to="/profile" className={(NavLink) => (!NavLink.isActive? s.link: s.active_link)} > MY PROFILE</NavLink>
            <NavLink to="/users" className={(NavLink) => (!NavLink.isActive? s.link: s.active_link)} > FIND USERS</NavLink>
            <NavLink to="/settings" className={(NavLink) => (!NavLink.isActive? s.link: s.active_link)} > SETTINGS</NavLink>
        </div>
    )
}
export default Sidebar