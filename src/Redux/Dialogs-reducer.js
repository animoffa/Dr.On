const ADD_MSG= 'ADD-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

let inicialisateState={
    DialogData: [
        {name: "Ilusha", id: 1},
        {name: "Masha", id: 2},
        {name: "Dasha", id: 3},
        {name: "Sasha", id: 4},
        {name: "Misha", id: 5},
        {name: "Nastya", id: 6},
    ],
    MessageData: [
        {msg: "hi"},
        {msg: "how are u"},
        {msg: "what are u doing"},
    ],
    NewMsgText: "",
};

const Dialogsreducer=(state=inicialisateState,action)=>{
    if (action.type === ADD_MSG){
        let newMsg = {
            msg: state.NewMsgText
        };
        return{
            ...state,
            NewMsgText:"",
            MessageData:[...state.MessageData,newMsg],

        };
    } else if (action.type === UPDATE_NEW_MSG_TEXT) {
        return {
            ...state,
            NewMsgText: action.newMText,
        };
    }
    return state;
};
export const updateNewMsgTextCreateAction=(text)=>{
    return{
        type:UPDATE_NEW_MSG_TEXT,
        newMText:text,
    }
};
export const addMsgCreateAction = () => {
    return {
        type: ADD_MSG
    }
};

export default Dialogsreducer;