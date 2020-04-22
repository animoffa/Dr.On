const SET_USER_DATA= 'SET_USER_DATA';


let inicialisateState={
   userID:null,
    mail:null,
    pass:null,
};

const Authreducer=(state=inicialisateState,action)=>{
   switch (action.type){
       case SET_USER_DATA:
           return{
               ...state,
               ...action.data
           };
       default:
           return state;
   }
};
export const setUserData = (userID,mail,pass) => {
    return {
        type: SET_USER_DATA,
        data:{userID,mail,pass}
    }
};

export default Authreducer;