import React from "react"
import style from "./MyPosts.module.css"
import Post from '../Post/Post.jsx'

const MyPosts = (props) =>{
  return(
  <div className = {style.wrapper}>
 		<h3 className = {style.header}>My Posts</h3>
 		<input className = {style.input} type="text" placeholder = 'your news...'/>
 		<div className = {style.btn}>Send</div> 
 		<Post state = {props.state}/>

  </div>
    )
}

export default MyPosts
