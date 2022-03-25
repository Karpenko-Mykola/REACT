import React from "react";
import style from "./MyPosts.module.css";
import Post from '../Post/Post.jsx';


const MyPosts = (props) =>{
	console.log(props.onChange);
  return(
  <div className = {style.wrapper}>
 		<h3 className = {style.header}>My Posts</h3>
 		<input className = {style.input} type="text" value = {props.state.postAreaValue} onChange = {props.onChange}/>
 		<button className = {style.btn} onClick = {props.onClick}>Send</button>
 		<Post state = {props.state}/>

  </div>
    )
}

export default MyPosts
