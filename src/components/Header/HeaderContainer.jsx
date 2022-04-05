import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/reducers/auth-reducer";
import * as axios from "axios";


class HeaderAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            console.log(response.data.data)
            this.props.setUserData(response.data.data)
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.auth
    }
}
const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPI)
export default HeaderContainer


