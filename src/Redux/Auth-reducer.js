import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let inicialisateState = {
    userID: null,
    mail: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

const Authreducer = (state = inicialisateState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const setUserData = (userID, mail, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userID, mail, login, isAuth}
});
export const getCaptchaURLSuccess = (captchaURL) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaURL}
});

export const getUserData = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true));
    }
};
export const login = (mail, pass, rememberMe) => (dispatch) => {
    authAPI.login(mail, pass, rememberMe).then(data => {
        if (data.data.resultCode === 0) {
            dispatch(getUserData());
        } else {
            if (data.data.resultCode === 10) {
                dispatch(getCaptcha());
            }
            let msg = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: msg}));
        }
    });
};
export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};
export const getCaptcha = () => (dispatch) => {
    debugger;
    securityAPI.getCaptchaURL().then(data => {

        const captchaURL = data.data.url;
        dispatch(getCaptchaURLSuccess(captchaURL));

    });
};

export default Authreducer;