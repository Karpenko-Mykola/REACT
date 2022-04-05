import React from "react";
import style from "./App.module.css";
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from "../DialogsContainer/DialogsContainer";
import UsersContainer from "../UsersContainer/UsersContainer";
import {ProfileContainer} from "../ProfileContainer/ProfileContainer";


const App = () => {
  return(
  	<BrowserRouter>
  		<div className = {style.wrapper}>
  			<Header/>
    		<div className = {style.content_wrapper}>
    			<Sidebar/>
    			<Routes>
    				<Route path ='/profile/:userId' element = {<ProfileContainer />}/>
					<Route path ='/profile/*' element = {<ProfileContainer />}/>
    				<Route path ='/dialogs/*' element = {<DialogsContainer />} />
					<Route path ='/users/*' element = {<UsersContainer />} />
    			</Routes>
   			</div>
    	</div>
  	</BrowserRouter>
  	
  	
    );
}

export default App
