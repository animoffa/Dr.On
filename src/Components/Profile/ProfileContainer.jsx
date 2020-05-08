import React from "react";
import Profile from "./Profile"
import {connect} from "react-redux";
import spinner from "../../image/spinner.gif"
import {withRouter} from "react-router-dom"
import {getProfile, getStatus, savePhoto, UpdateStatus} from "../../Redux/Profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    RefreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.autorizedUserID;
        }
        this.props.getProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidMount() {
        this.RefreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                    status: this.props.status
                }
            )
        }
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.RefreshProfile();
        }
    }

    render() {
        if (!this.props.profile) {
            return (
                <img src={spinner} width="60px" alt="Loading..."/>
            );
        }
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        UpdateStatus={this.props.UpdateStatus} isOwner={!this.props.match.params.userID}
                        savePhoto={this.props.savePhoto}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.Profile,
        status: state.ProfilePage.Status,
        autorizedUserID: state.Auth.userID,
        isAuth: state.Auth.isAuth,
    }
};
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, UpdateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);