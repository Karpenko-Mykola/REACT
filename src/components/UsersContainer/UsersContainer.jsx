import {connect} from "react-redux";
import {
    followChangeActionCreator,
    setUsersAC,
    setTotalCountAC,
    setCurrentPageAC
} from "../../redux/reducers/users-reducer";
import Users from "./Users/Users";
import * as axios from "axios";
import React from "react"


class UsersApi extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    getPageUsers = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
}

    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      data={this.props.data}
                      page={this.props.page}
                      getPageUsers={this.getPageUsers}
                      onClick = {this.props.onClick}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClick(id) {
            dispatch(followChangeActionCreator(id));
        },
        setUsers(users) {
            dispatch(setUsersAC(users));
        },
        setTotalCount(count) {
            dispatch(setTotalCountAC(count))
        },
        setCurrentPage(page) {
            dispatch(setCurrentPageAC(page))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi);
export default UsersContainer