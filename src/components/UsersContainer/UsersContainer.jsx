import {connect} from "react-redux";
import {
    followChangeActionCreator,
    setUsersAC,
    setTotalCountAC,
    setCurrentPageAC
} from "../../redux/reducers/users-reducer";
import Users from "./Users/Users";

const mapStateToProps = (state) =>{
    return{
        data: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onClick(id){
            dispatch(followChangeActionCreator(id));
        },
        setUsers(users){
            dispatch(setUsersAC(users));
        },
        setTotalCount(count){
            dispatch(setTotalCountAC(count))
        },
        setCurrentPage(page){
            dispatch(setCurrentPageAC(page))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer