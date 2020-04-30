import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE='SET_USERS_PROFILE';
const SET_STATUS='SET_STATUS';

let inicialisateState = {
    PostData: [],
    Profile:null,
    Status:"",
};

const Profilereducer = (state = inicialisateState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                msg: action.value,
                id: 3,
                likecount: 0,
            };
            return {
                ...state,
                PostData: [newPost, ...state.PostData],
            };
        }

        case  SET_STATUS: {
            return {
                ...state,
                Status:action.status,
            };
        }

        case SET_USERS_PROFILE:
            return {...state, Profile:action.profile};
        default:
            return state;
    }
};
export const addPost = (value) => {
    return {
        type: ADD_POST,
        value,
    }
};
export const setUsersProfile=(profile)=>({type:SET_USERS_PROFILE,profile});
export const setStatus=(status)=>({type:SET_STATUS,status});

export const getProfile=(userID)=>{
  return (dispatch)=>{
      profileAPI.getProfile(userID).then(data => {
          dispatch(setUsersProfile(data));
  })
}
};

export const getStatus=(userID)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userID).then(response => {
            dispatch(setStatus(response.data));
        })
    }
};
export const UpdateStatus=(status)=>{
    return (dispatch)=>{
        profileAPI.UpdateStatus(status).then(response => {
            if(response.data.resultCode===0) {
                dispatch(setStatus(status));
            }
        })
    }
};
export default Profilereducer;