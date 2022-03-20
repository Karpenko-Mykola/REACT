import React from "react"
import style from "./Sidebar.module.css"

const Sidebar = () =>{
  return(
    <div className = {style.wrapper}>
    <a href="#" className = {`${style.list_item} ${style.active}`}>Profile</a>
    <a href="#" className = {style.list_item}>Messages</a>
    <a href="#" className = {style.list_item}>News</a>
    <a href="#" className = {style.list_item}>Music</a>
    <a href="#" className = {style.list_item}>Settings</a>
    </div>
    )
}

export default Sidebar
