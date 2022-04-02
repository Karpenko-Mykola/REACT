import {connect} from "react-redux";
import {followChangeActionCreator, setUsersAC} from "../../redux/reducers/users-reducer";
import Users from "./Users/Users";

const mapStateToProps = (state) =>{
    return{
        data: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onClick(id){
            dispatch(followChangeActionCreator(id));
        },
        setUsers(users){
            dispatch(setUsersAC(users));
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer