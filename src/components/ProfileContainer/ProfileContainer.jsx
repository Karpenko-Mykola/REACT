import React from "react";
import style from "./ProfileContainer.module.css"
import {Navigate , useLocation, useNavigate, useParams,} from "react-router-dom";
import {connect} from "react-redux";
import UserProfile from "./UserProfile/UserProfile";
import MyPosts from "./MyPosts/MyPosts";
import {addPost, getProfileTHUNK, postInputChange} from "../../redux/reducers/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId || 15746;
        this.props.getProfileTHUNK(userId)
    }

    render() {
        return(
        <div className={style.wrapper}>
            <UserProfile data={this.props.data.profile}/>
            <MyPosts data={this.props.data}
                     changeInputValue={this.props.postInputChange}
                     onClick={this.props.addPost}/>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profilePage,
        userID: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{addPost, postInputChange, getProfileTHUNK}),
    withRouter)
(ProfileContainer)
