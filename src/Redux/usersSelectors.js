import {createSelector} from "reselect";
export const getUsersS=(state)=>{
  return state.FriendsPage.users;
};

export const getUsersSelector= createSelector(getUsersS,(users)=>{
return users.filter(u=>true);
});


export const getPageSize=(state)=>{
    return state.FriendsPage.pageSize;
};
export const getTotalUsersCount=(state)=>{
    return state.FriendsPage.totalUsersCount
};
export const getCurrentPage=(state)=>{
    return state.FriendsPage.currentPage
};
export const getIsFetching=(state)=>{
    return state.FriendsPage.isFetching
};
export const getFollowingInProgress=(state)=>{
    return state.FriendsPage.followingInProgress
};