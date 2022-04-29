import React from "react";
import {useParams} from "react-router-dom";
import User from "../User/User";
import Users from "../Users/Users";


const UsersRouterContainer = () => {
    let {userID} = useParams();
    if (userID) return <User userId = {userID}/>
    return <Users/>
}

export default UsersRouterContainer