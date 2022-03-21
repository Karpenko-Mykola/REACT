import React from "react"
import style from "./Post.module.css"

const Post = (props) =>{
  return(
    <div className = {style.wrapper}>
    	<div className = {style.post}>{props.message}</div>
    </div>
    )
}

export default Post
