import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, postInputChangeActionCreator} from "../../redux/reducers/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return{data: state.profilePage}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeInputValue(value){
            dispatch(postInputChangeActionCreator(value))
        },
        onClick(){
            dispatch(addPostActionCreator())
        },
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer