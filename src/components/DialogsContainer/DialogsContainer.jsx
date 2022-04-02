import Dialogs from "./Dialogs/Dialogs";
import {addMessageactionCreator, messageInputChangeActionCreator} from "../../redux/reducers/dialog-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        data: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onClick(){
            dispatch(addMessageactionCreator())
        },
        changeInputValue(value){
            dispatch(messageInputChangeActionCreator(value))
        },
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer

