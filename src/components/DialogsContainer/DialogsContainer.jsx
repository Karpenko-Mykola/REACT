import Dialogs from "./Dialogs/Dialogs";
import {addMessageactionCreator, messageInputChangeActionCreator} from "../../redux/dialog-reducer";

const DialogsContainer = (props) => {

    const changeInputValue = (value) => {
        props.store.dispatch(messageInputChangeActionCreator(value));
    }

    const onClick = () => {
        props.store.dispatch(addMessageactionCreator())
    }

    return (
        <Dialogs onClick={onClick} changeInputValue={changeInputValue} data={props.store.getState().dialogsPage}/>
    )
}

export default DialogsContainer