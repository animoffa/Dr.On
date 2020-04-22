const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE='SET_USERS_PROFILE';

let inicialisateState = {
    PostData: [],
    NewPostText: "",
    Profile:null,
};

const Profilereducer = (state = inicialisateState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                msg: state.NewPostText,
                id: 3,
                likecount: 0,
            };
            return {
                ...state,
                PostData: [newPost, ...state.PostData],
                NewPostText: "",
            };
        }
        case  UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                NewPostText: action.newText
            };
        }
        case SET_USERS_PROFILE:
            return {...state, Profile:action.profile};
        default:
            return state;
    }
};
export const addPostCreateAction = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextCreateAction = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};
export const setUsersProfile=(profile)=>({type:SET_USERS_PROFILE,profile});
export default Profilereducer;