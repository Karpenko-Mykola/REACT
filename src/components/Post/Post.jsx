import React from "react"
import style from "./Post.module.css"


const Post = (props) =>{
	let postElements = props.state.postData.map(el => <div className = {style.post}>{el.postText}</div>)
  return(
    <div className = {style.wrapper}>
    	{postElements}	
    </div>
    )
}

export default Post
