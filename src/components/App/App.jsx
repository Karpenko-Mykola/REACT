import React from "react";
import style from "./App.module.css";
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const App = () => {
  return(
    <div className = {style.wrapper}>
    	<Header/>
    	<div className = {style.content_wrapper}>
    		<Sidebar/>
   			<Content/>
   		 </div>
    </div>
    );
}

export default App
