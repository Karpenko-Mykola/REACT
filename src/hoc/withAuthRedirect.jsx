import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let withAuthRedirect = (Component) => {
    let ContainerComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/auth'}/>
        return (
            <Component {...props}/>
        )
    }
    return connect(mapStateToProps)(ContainerComponent)
}

export default withAuthRedirect

