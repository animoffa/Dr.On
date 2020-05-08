import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO = 'profile/SAVE_PHOTO';

let inicialisateState = {
    PostData: [],
    Profile: null,
    Status: "",
};

const Profilereducer = (state = inicialisateState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                msg: action.value,
                id: 1,
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
                Status: action.status,
            };
        }

        case SET_USERS_PROFILE:
            return {...state, Profile: action.profile};

        case DELETE_POST:
            return {...state, PostData: state.PostData.filter(p => p.id !== action.id)};
        case SAVE_PHOTO:
            return {...state.profile, photos: action.photos};
        default:
            return state;
    }
};
export const addPost = (value) => ({type: ADD_POST, value});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});

export const getProfile = (userID) => (dispatch) => {
    profileAPI.getProfile(userID).then(data => {
        dispatch(setUsersProfile(data));
    })
};
export const getStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatus(response.data));
    })
};
export const UpdateStatus = (status) => (dispatch) => {
    try {
        profileAPI.UpdateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    } catch (error) {
        alert(error.message);
    }
};
export const savePhoto = (file) => (dispatch) => {
    profileAPI.SavePhoto(file).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos.large));
            dispatch(savePhotoSuccess(response.data.data.photos.small));
        }
    })
};
export default Profilereducer;