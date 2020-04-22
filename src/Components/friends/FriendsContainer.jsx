import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/Friends-reducer";
import * as axios from "axios";
import Friends from "./Friends"
import spinner from "../../image/spinner.gif"

class FriendsAPIComponent extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        });
    };

    render() {

        return <>
            <Friends onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                     users={this.props.users} follow={this.props.follow}
                     unfollow={this.props.unfollow}/>
            {this.props.isFetching ? <img src={spinner} width="1015"/> : null}
        </>
    };

}


let mapStateToProps = (state) => {
    return {
        users: state.FriendsPage.users,
        pageSize: state.FriendsPage.pageSize,
        totalUsersCount: state.FriendsPage.totalUsersCount,
        currentPage: state.FriendsPage.currentPage,
        isFetching: state.FriendsPage.isFetching,
    }
};

export default connect(mapStateToProps, {
    setCurrentPage,
    setTotalUsersCount,
    follow,
    unfollow,
    setUsers,
    toggleIsFetching
})(FriendsAPIComponent);