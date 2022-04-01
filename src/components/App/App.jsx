import React from "react";
import style from "./App.module.css";
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from "../DialogsContainer/DialogsContainer";


const App = (props) => {
  return(
  	<BrowserRouter>
  		<div className = {style.wrapper}>
  			<Header/>
    		<div className = {style.content_wrapper}>
    			<Sidebar/>
    			<Routes>
    				<Route path ='/profile/*' element = {<Content />}	/>
    				<Route path ='/dialogs/*' element = {<DialogsContainer />} />
    			</Routes>
   			</div>
    	</div>
  	</BrowserRouter>
  	
  	
    );
}

export default App
