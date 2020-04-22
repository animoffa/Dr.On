const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
const SET_CURRENT_PAGE= 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING';

let inicialisateState = {
    users: [],
    pageSize:15,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
};

const Friendsreducer = (state = inicialisateState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        }
        case SET_USERS:{
            return{...state,users:action.users}
        }
        case SET_CURRENT_PAGE:
            return {...state,currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state,totalUsersCount:action.count };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching};
        default:
            return state;

    }
};

export const follow = (userID) => ({type:FOLLOW,userID});
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
};
export const setUsers =(users)=>({type:SET_USERS,users});
export const setCurrentPage =(currentPage)=>({type:SET_CURRENT_PAGE,currentPage});
export const toggleIsFetching=(isFetching)=>({type:TOGGLE_IS_FETCHING,isFetching});
export const setTotalUsersCount =(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT,count:totalUsersCount});
export default Friendsreducer;