import React from "react";
import style from "./App.module.css";
import Sidebar from '../Sidebar/Sidebar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from "../DialogsContainer/DialogsContainer";
import UsersContainer from "../UsersContainer/UsersContainer";
import HeaderContainer from "../Header/HeaderContainer.jsx";
import ProfileContainer from "../ProfileContainer/ProfileContainer";
import {AuthContainer} from "../Auth/AuthContainer/AuthContainer";
import {connect} from "react-redux";
import {initializedTHUNK} from "../../redux/reducers/main-reducer";
import Preloader from "../Preloader/Preloader";



class App extends React.Component {
	componentDidMount() {
		this.props.initializedTHUNK()
	}
	render() {
		if(this.props.initialized) return <Preloader/>
		return (
			<BrowserRouter>
				<div className={style.wrapper}>
					<HeaderContainer/>
					<div className={style.content_wrapper}>
						<Sidebar/>
						<Routes>
							<Route path='/profile/:userId' element={<ProfileContainer/>}/>
							<Route path='/profile/*' element={<ProfileContainer/>}/>
							<Route path='/dialogs/*' element={<DialogsContainer/>}/>
							<Route path='/users/*' element={<UsersContainer/>}/>
							<Route path='/auth' element={<AuthContainer/>}/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

export default connect(mapStateToProps, {initializedTHUNK})(App)
