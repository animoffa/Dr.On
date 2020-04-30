import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ME = 'SET_ME';


let inicialisateState = {
    userID: null,
    mail: null,
    login: null,
    isAuth: false,
};

const Authreducer = (state = inicialisateState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };

        default:
            return state;
    }
};
export const setUserData = (userID, mail, login,isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userID, mail, login,isAuth}
    }
};
export const getUserData = () => (dispatch) => {
    debugger;
     return authAPI.getAuth().then(data => {
            if (data.resultCode ===0){
                let {id,login,email}=data.data;
                dispatch(setUserData(id,email,login,true));
            }
        });

};

export const login = (mail,pass, rememberMe) => (dispatch) => {

    authAPI.login(mail,pass,rememberMe).then(data => {
            if (data.data.resultCode ===0){
                dispatch(getUserData());
            } else{
                let msg= data.data.messages.length>0 ? data.data.messages[0] : "Some error";
                dispatch(stopSubmit("login",{_error:msg}));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {

        if (data.data.resultCode ===0){
            dispatch(setUserData(null,null,null,false));
        }
    });
};
export default Authreducer;