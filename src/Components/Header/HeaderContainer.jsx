import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData, login, logout} from "../../Redux/Auth-reducer";

class Auth extends React.Component{
    render() {

        return <Header {...this.props}/>
    }
}
let mapStateToProps=(state)=>{
    return {
        login:state.Auth.login,
        isAuth:state.Auth.isAuth,
        autorizedUserID:state.Auth.userID,
    }

};
export default connect(mapStateToProps, { logout})(Auth);