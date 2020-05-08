import {getUserData} from "./Auth-reducer";

const SET_INITIALIZED = 'App/SET_INITIALIZED';


let inicialState = {
    initialized: false
};

const AppReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializingSuccess = () => ({type: SET_INITIALIZED,});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserData());
    promise.then(() => {
        dispatch(initializingSuccess());
    })
};

export default AppReducer;