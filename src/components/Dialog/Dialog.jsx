import React from 'react';
import style from './Dialog.module.css';

const Dialog = (props) =>{
	return(
		<div className = {style.wrapper}>
			<div className = {style.dialogs_message}>{props.message}</div>
		</div>
		)
}

export default Dialog