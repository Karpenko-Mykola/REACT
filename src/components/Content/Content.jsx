import React from "react";
import style from "./Content.module.css";
import MyPosts from '../MyPosts/MyPosts.jsx';


const Content = () => {
  return(
    <div className = {style.wrapper}>
    	<img className = {style.content_img}src="https://funart.pro/uploads/posts/2021-03/thumbs/1617061766_47-p-oboi-oboi-peizazh-47.jpg" alt="img"/>
    	<div className = {style.person}>
    		<img className = {style.person_ava} src="https://i.pinimg.com/474x/b7/91/52/b79152a9f75782757086d5d13489f6d1--ugly-guys-guy-pictures.jpg" alt="ava"/>
    		<div className = {style.person_descr}>
    			<h3 className = {style.person_descr_name}> Mykola KARPENKO</h3>
    			<p className = {style.person_descr_info}>Date Of Birth: 13 may</p>
    			<p className = {style.person_descr_info}>City: Kyiv</p>
    			<p className = {style.person_descr_info}>Education: NTUU KPI</p>
    			<p className = {style.person_descr_info}>Web Site : karpenko.n.an@gmail.com</p>	
    		</div>
    	</div>
        <MyPosts/>
    </div>
    )
}

export default Content
