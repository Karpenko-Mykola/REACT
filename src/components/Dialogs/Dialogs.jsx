import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialog from '../Dialog/Dialog.jsx';

const Dialogs = (props) =>{
	let Navigate = props.state.friendsData.map(el => <NavLink to = {`/dialogs/${el.id}`} className = {navData => navData.isActive? style.dialogs_items_link_active : style.dialogs_items_link}> {el.name} </NavLink> )
	let Messages = props.state.messageData.map(el => <Dialog message = {el.message}/>)
	return(
	<div className = {style.wrapper}>
		<h1>Dialogs</h1>
		<div className = {style.dialogs}>
			<div className = {style.dialogs_items}>
				{Navigate}
			</div>
				<div className = {style.dialogs_messages}>
		            {Messages}
					<input type="text" value = {props.state.dialogAraeValue} onChange = {(event) => props.dispatch({type: "DIALOG-INPUT-CHANGE", newText : event.target.value })}/>
					<button className = {style.dialogs_messages_button} onClick = {() => props.dispatch({type: "ADD-MESSAGE" })}>Send</button>
				</div>
		</div>
	</div>
		
		);
}

export default Dialogs