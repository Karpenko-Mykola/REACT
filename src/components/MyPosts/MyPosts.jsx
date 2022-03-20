import React from "react"
import style from "./MyPosts.module.css"
import Posts from '../Posts/Posts.jsx'

const MyPosts = () =>{
  return(
  <div className = {style.wrapper}>
 		<h3 className = {style.header}>My Posts</h3>
 		<input className = {style.input} type="text" placeholder = 'your news...'/>
 		<div className = {style.btn}>Send</div> 
 		<Posts/>
  </div>
    )
}

export default MyPosts
