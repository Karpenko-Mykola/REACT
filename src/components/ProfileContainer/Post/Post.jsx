import React from "react"
import style from "./Post.module.css"

const Post = (props) =>{
	let postElements = props.data.postData.map(el => <div key = {el.id} className = {style.post}>{el.postText}</div>)
  return(
    <div className = {style.wrapper}>
    	{postElements}	
    </div>
    )
}

export default Post
