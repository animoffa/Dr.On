import {getUserData} from "./Auth-reducer";

const SET_INITIALIZED = 'App/SET_INITIALIZED';


let inicialisateState = {
  initialized:false
};

const AppReducer = (state = inicialisateState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true,
            };
        default:
            return state;
    }
};
export const initializingSuccess = () => {
    return {
        type: SET_INITIALIZED,
    }
};
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserData());
    promise.then(()=>{
        dispatch(initializingSuccess());
    })

};


export default AppReducer;