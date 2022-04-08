import {connect} from "react-redux";
import { getUsersTHUNK, followTHUNK} from "../../redux/reducers/users-reducer";
import Users from "./Users/Users";
import React from "react"
import withAuthRedirect from "../../hoc/withAuthRedirect";



class UsersApi extends React.Component {
    componentDidMount() {
        this.props.getUsersTHUNK(this.props.page, this.props.pageSize)
    }

    getPageUsers = (page) => {
        this.props.getUsersTHUNK(page, this.props.pageSize)
    }

    render() {
        return <Users {...this.props} getPageUsers={this.getPageUsers}

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
        followedUsers: state.usersPage.followedUsers,

    }
}

const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
    getUsersTHUNK,
    followTHUNK
})(UsersApi));
export default UsersContainer