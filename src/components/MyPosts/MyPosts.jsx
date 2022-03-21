import React from "react"
import style from "./MyPosts.module.css"
import Post from '../Post/Post.jsx'

const MyPosts = () =>{
  return(
  <div className = {style.wrapper}>
 		<h3 className = {style.header}>My Posts</h3>
 		<input className = {style.input} type="text" placeholder = 'your news...'/>
 		<div className = {style.btn}>Send</div> 
 		<Post message = "Hello"/>
 		<Post message = "How are you"/>
 		<Post message = "All right"/>

  </div>
    )
}

export default MyPosts
