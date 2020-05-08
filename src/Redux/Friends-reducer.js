import {userAPI} from "../api/api";

const FOLLOW = 'Friends/FOLLOW';
const UNFOLLOW = 'Friends/UNFOLLOW';
const SET_USERS = 'Friends/SET_USERS';
const SET_CURRENT_PAGE = 'Friends/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'Friends/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'Friends/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'Friends/TOGGLE_IS_FOLLOWING';

let inicialisateState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};
let ToggleFollow = (state, action, toggle) => {
    return state.users.map(user => {
        if (user.id === action.userID) {
            return {...user, followed: toggle}
        }
        return user;
    })
};

const Friendsreducer = (state = inicialisateState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: ToggleFollow(state, action, true)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: ToggleFollow(state, action, false)
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            };
        }
        default:
            return state;

    }
};

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFollowing = (isFetching, userID) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userID});

let FollowUnfollowFlow = (dispatch, userID, APIMethod, ActionCreator) => {
    dispatch(toggleIsFollowing(true, userID));
    APIMethod.then(data => {
        if (data.resultCode === 0) {
            dispatch(ActionCreator(userID))
        }
        dispatch(toggleIsFollowing(false, userID));
    });
};

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    });
};
export const unfollowThunk = (userID) => (dispatch) => {
    let APIMethod = userAPI.unfollowAPI(userID);
    let actionCreator = unfollow;
    FollowUnfollowFlow(dispatch, userID, APIMethod, actionCreator);
};
export const followThunk = (userID) => (dispatch) => {
    let APIMethod = userAPI.followAPI(userID);
    let actionCreator = follow;
    FollowUnfollowFlow(dispatch, userID, APIMethod, actionCreator);
};

export default Friendsreducer;