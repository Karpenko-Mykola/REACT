import React from "react";
import style from "./ProfileContainer.module.css"
import {Navigate , useLocation, useNavigate, useParams,} from "react-router-dom";
import {connect} from "react-redux";
import UserProfile from "./UserProfile/UserProfile";
import MyPosts from "./MyPosts/MyPosts";
import {addPost, getProfileTHUNK, postInputChange} from "../../redux/reducers/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";


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

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId || 15746;
        this.props.getProfileTHUNK(userId)
    }

    render() {
        if(!this.props.isAuth)  return <Navigate  to={'/auth'}/>
        return(
        <div className={style.wrapper}>
            <img className={style.content_img}
                 src="https://funart.pro/uploads/posts/2021-03/thumbs/1617061766_47-p-oboi-oboi-peizazh-47.jpg"
                 alt="img"/>
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
        isAuth : state.auth.isAuth,
    }
}

const withRouterProfile = withRouter(ProfileAPI);
export const ProfileContainer = withAuthRedirect(connect(mapStateToProps,
    {addPost, postInputChange, getProfileTHUNK})(withRouterProfile));