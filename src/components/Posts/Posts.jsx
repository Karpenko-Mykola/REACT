import React from "react"
import style from "./Posts.module.css"

const Posts = () =>{
  return(
    <div className = {style.wrapper}>
    	<div className = {style.post}>How are you?</div>
    	<div className = {style.post}>Anybody here?</div>
    	<div className = {style.post}>Let's GO!</div>
    </div>
    )
}

export default Posts
