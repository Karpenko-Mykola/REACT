import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialog from '../Dialog/Dialog.jsx';

const Dialogs = (props) => {
    let Navigate = props.data.friendsData.map(el => <NavLink to={`/dialogs/${el.id}`} key={el.id}
                                                             className={navData => navData.isActive ? style.dialogs_items_link_active : style.dialogs_items_link}> {el.name} </NavLink>)
    let Messages = props.data.messageData.map(el => <Dialog key={el.id} message={el.message}/>)
    return (
        <div className={style.wrapper}>
            <h1>Dialogs</h1>
            <div className={style.dialogs}>
                <div className={style.dialogs_items}>
                    {Navigate}
                </div>
                <div className={style.dialogs_messages}>
                    {Messages}
                    <input type="text" value={props.data.dialogAraeValue}
                           onChange={(event) => props.changeInputValue(event.target.value)}/>
                    <button className={style.dialogs_messages_button} onClick={() => props.onClick()}>Send</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs