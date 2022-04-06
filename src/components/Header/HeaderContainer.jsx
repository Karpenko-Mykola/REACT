import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/reducers/auth-reducer";
import {userAPI} from "../../api/api";


class HeaderAPI extends React.Component {

    componentDidMount() {
        userAPI.setAuthData().then(response => {
            if(response.resultCode === 0)
            this.props.setUserData(response.data)
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


