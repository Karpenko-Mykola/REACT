import {connect} from "react-redux";
import {
    followChange,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleFetching
} from "../../redux/reducers/users-reducer";
import Users from "./Users/Users";
import * as axios from "axios";
import React from "react"


class UsersApi extends React.Component {
    componentDidMount() {
        this.props.setUsers([]);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleFetching(false);
            })
    }

    getPageUsers = (page) => {
        this.props.setUsers([]);
        this.props.toggleFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleFetching(false);
            })
    }

    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      data={this.props.data}
                      page={this.props.page}
                      getPageUsers={this.getPageUsers}
                      onClick={this.props.followChange}
                      isFetching={this.props.isFetching}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,

    }
}

const UsersContainer = connect(mapStateToProps, {
    followChange,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleFetching
})(UsersApi);
export default UsersContainer