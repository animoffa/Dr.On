const ADD_MSG= 'Dialogs/ADD-MSG';

let inicialisateState={
    DialogData: [
        {name: "Ilya", id: 1},
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
};

const Dialogsreducer=(state=inicialisateState,action)=>{
    if (action.type === ADD_MSG){
        let body = action.value;
        return{...state, MessageData:[...state.MessageData,{msg:body}],
        };
    }
    return state;
};

export const addMsg = (value) => ({type: ADD_MSG, value});

export default Dialogsreducer;