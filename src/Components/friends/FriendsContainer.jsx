import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunk, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowing,
    unfollow, unfollowThunk
} from "../../Redux/Friends-reducer";
import Friends from "./Friends"
import spinner from "../../image/spinner.gif"
import {userAPI} from "../../api/api";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersS,
} from "../../Redux/usersSelectors";

class FriendsAPIComponent extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {pageSize} = this.props;
        this.props.getUsers(page, pageSize);
    };

    render() {
        return <>
            <Friends onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                     users={this.props.users} follow={this.props.follow}
                     unfollow={this.props.unfollow} unfollowAPI={userAPI.unfollowAPI}
                     followAPI={userAPI.followAPI} followingInProgress={this.props.followingInProgress}
                     toggleIsFollowing={this.props.toggleIsFollowing} unfollowThunk={this.props.unfollowThunk}
                     followThunk={this.props.followThunk}/>
            {this.props.isFetching ? <img src={spinner} width="1015"/> : null}
        </>
    };

}


let mapStateToProps = (state) => {
    return {
        users: getUsersS(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default connect(mapStateToProps, {
    setCurrentPage,
    setTotalUsersCount,
    follow,
    unfollow,
    setUsers,
    toggleIsFetching,
    toggleIsFollowing,
    getUsers,
    unfollowThunk,
    followThunk,
})(FriendsAPIComponent);