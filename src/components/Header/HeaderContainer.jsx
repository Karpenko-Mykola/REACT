import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTHUNK,} from "../../redux/reducers/auth-reducer";


class HeaderAPI extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.auth
    }
}
const HeaderContainer = connect(mapStateToProps, {logoutTHUNK} )(HeaderAPI)
export default HeaderContainer


