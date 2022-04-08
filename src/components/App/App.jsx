import React from "react";
import style from "./App.module.css";
import Sidebar from '../Sidebar/Sidebar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from "../DialogsContainer/DialogsContainer";
import UsersContainer from "../UsersContainer/UsersContainer";
import {ProfileContainer} from "../ProfileContainer/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer.jsx";
import Auth from "../Auth/Auth";


const App = () => {
  return(
  	<BrowserRouter>
  		<div className = {style.wrapper}>
  			<HeaderContainer/>
    		<div className = {style.content_wrapper}>
    			<Sidebar/>
    			<Routes>
    				<Route path ='/profile/:userId' element = {<ProfileContainer />}/>
					<Route path ='/profile/*' element = {<ProfileContainer />}/>
    				<Route path ='/dialogs/*' element = {<DialogsContainer />} />
					<Route path ='/users/*' element = {<UsersContainer />} />
					<Route path ='/auth' element = {<Auth/>}/>
    			</Routes>
   			</div>
    	</div>
  	</BrowserRouter>
  	
  	
    );
}

export default App
