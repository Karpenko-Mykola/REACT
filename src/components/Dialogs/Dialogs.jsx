import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialog from '../Dialog/Dialog.jsx';

let DataFriends = [
	{id: 1, name: "Mykola", message1 : "Hello", message2 : "How are you?"},
	{id: 2, name: "Vasiliy", message1 : "somethink", message2 : "else"},
	{id: 3, name: "Maruna", message1 : "Hello", message2 : "How are you?"},
	{id: 4, name: "Kostia",message1 : "somethink", message2 : "else"},
	{id: 5, name: "Sasha", message1 : "Hello", message2 : "How are you?"},
	{id: 6, name: "Maksim", message1 : "somethink", message2 : "else"},
]

let DataMesagges = [
	{id: 1, message : "One message"},
	{id: 2, message : "Second message"},
	{id: 3, message : "Third message"},

]

let Navigate = DataFriends.map(el => <NavLink to = {`/dialogs/${el.id}`} className = {navData => navData.isActive? style.dialogs_items_link_active : style.dialogs_items_link}> {el.name} </NavLink> )

let Messages = DataMesagges.map(el => <Dialog message = {el.message}/>)

const Dialogs = () =>{
	return(
	<div className = {style.wrapper}>
		<h1>Dialogs</h1>
		<div className = {style.dialogs}>
			<div className = {style.dialogs_items}>
				{Navigate}
			</div>
				<div className = {style.dialogs_messages}>
		            {Messages}
					<input type="text"/>
					<div className = {style.dialogs_messages_button}>Send</div>
				</div>
		</div>
	</div>
		
		);
}

export default Dialogs