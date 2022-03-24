import React from "react"
import style from "./MyPosts.module.css"
import Post from '../Post/Post.jsx'
import {postOnChange} from '../../redux/state.js';
import {postOnClick} from '../../redux/state.js'

const MyPosts = (props) =>{
  return(
  <div className = {style.wrapper}>
 		<h3 className = {style.header}>My Posts</h3>
 		<input className = {style.input} type="text" value = {props.state.postAreaValue} onChange = {postOnChange}/>
 		<button className = {style.btn} onClick = {postOnClick}>Send</button>
 		<Post state = {props.state}/>

  </div>
    )
}

export default MyPosts
