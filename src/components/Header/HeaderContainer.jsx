import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {isAuthTHUNK, logoutTHUNK,} from "../../redux/reducers/auth-reducer";


class HeaderAPI extends React.Component {

    componentDidMount() {
        this.props.isAuthTHUNK()
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
const HeaderContainer = connect(mapStateToProps, {isAuthTHUNK, logoutTHUNK} )(HeaderAPI)
export default HeaderContainer


