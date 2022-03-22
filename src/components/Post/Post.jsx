import React from "react"
import style from "./Post.module.css"

let postData = [
	{id: 1, postText : "My first Post"},
	{id: 2, postText : "My second Post"},
	{id: 3, postText : "Something else"},
	{id: 4, postText : "etc..."}
]

let postElements = postData.map(el => <div className = {style.post}>{el.postText}</div>)

const Post = () =>{
  return(
    <div className = {style.wrapper}>
    	{postElements}	
    </div>
    )
}

export default Post
