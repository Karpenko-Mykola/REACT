import Dialogs from "./Dialogs/Dialogs";
import {addMessageactionCreator, messageInputChangeActionCreator} from "../../redux/reducers/dialog-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)


