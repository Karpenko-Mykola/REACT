import  * as React from "react";
import style from "./MyPosts.module.css";
import Post from '../Post/Post.jsx';

const MyPosts = (props) =>{
  return(
  <div className = {style.wrapper}>
 		<h3 className = {style.header}>My Posts</h3>
 		<input className = {style.input} type="text"  value = {props.data.postAreaValue} onChange = {(event) => props.changeInputValue(event.target.value)}/>
 		<button className = {style.btn} onClick = {() => props.onClick()}>Send</button>
 		<Post data = {props.data}/>

  </div>
    )
}

export default MyPosts
