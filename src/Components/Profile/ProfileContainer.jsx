import React from "react";
import Profile from "./Profile"
import {connect} from "react-redux";
import spinner from "../../image/spinner.gif"
import {withRouter} from "react-router-dom"
import {getProfile, getStatus, UpdateStatus} from "../../Redux/Profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.autorizedUserID;
        }
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                    status: this.props.status
                }
            )
        }
    }

    render() {
        if (!this.props.profile) {
            return (
                <img src={spinner} width="1035px"/>
            );
        }
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        UpdateStatus={this.props.UpdateStatus}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.Profile,
        status: state.ProfilePage.Status,
        autorizedUserID:state.Auth.userID,
        isAuth:state.Auth.isAuth,
    }
};
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, UpdateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);