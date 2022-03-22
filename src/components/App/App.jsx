import React from "react";
import style from "./App.module.css";
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Dialogs from '../Dialogs/Dialogs.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  return(
  	<BrowserRouter>
  		<div className = {style.wrapper}>
  			<Header/>
    		<div className = {style.content_wrapper}>
    			<Sidebar/>
    			<Routes>
    				<Route path ='/profile/*' element = {<Content/>} />	
    				<Route path ='/dialogs/*' element = {<Dialogs/>} />	
    			</Routes>
   			</div>
    	</div>
  	</BrowserRouter>
  	
  	
    );
}

export default App
