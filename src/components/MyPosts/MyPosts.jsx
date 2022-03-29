import  * as React from "react";
import style from "./MyPosts.module.css";
import Post from '../Post/Post.jsx';


const MyPosts = (props) =>{
  return(
  <div className = {style.wrapper}>
 		<h3 className = {style.header}>My Posts</h3>
 		<input className = {style.input} type="text"  value = {props.state.postAreaValue} onChange = {(event) => props.dispatch({type: "POST-INPUT-CHANGE", newText : event.target.value})}/>
 		<button className = {style.btn} onClick = {() => props.dispatch({type : "ADD-POST"})}>Send</button>
 		<Post state = {props.state}/>

  </div>
    )
}

export default MyPosts
