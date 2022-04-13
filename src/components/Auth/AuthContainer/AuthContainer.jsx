import React from "react"
import {connect} from "react-redux";
import Auth from "../Auth";
import {loginTHUNK} from "../../../redux/reducers/auth-reducer";

const mapStateToProps = (state) => {
   return {isAuth: state.auth.isAuth}
}

export const  AuthContainer =  connect(mapStateToProps, {loginTHUNK} )(Auth)
