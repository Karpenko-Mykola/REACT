import React from "react";
import style from "./Sidebar.module.css";
import {NavLink} from 'react-router-dom';

const Sidebar = () =>{
  return(
    <div className = {style.wrapper}>
    <NavLink to="/profile" className = {({isActive}) => isActive? `${style.list_item_active}` :`${style.list_item}`}>Profile</NavLink>
    <NavLink to="/dialogs" className = {({isActive}) => isActive? `${style.list_item_active}` :`${style.list_item}`}>Messages</NavLink>
    <NavLink to="/news" className = {navData => navData.isActive? style.list_item_active : style.list_item }>News</NavLink>
    <NavLink to="/music" className = {({isActive}) => isActive? `${style.list_item_active}` :`${style.list_item}`}>Music</NavLink>
    <NavLink to="/settings" className = {({isActive}) => isActive? `${style.list_item_active}` :`${style.list_item}`}>Settings</NavLink>
    </div>
    )
}

export default Sidebar
