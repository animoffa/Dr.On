import React from "react";
import Profile from "./Profile"
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "./../../Redux/Profile-reducer"
import spinner from "../../image/spinner.gif"
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {

            this.props.setUsersProfile(response.data);
        });
    }

    render() {
        if (!this.props.profile)
            return (
                <img src={spinner} width="1035px"/>
            );

        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.Profile,
    }
};
let ProfileContainerWithURL = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUsersProfile})(ProfileContainerWithURL);