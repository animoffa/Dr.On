import Dialogsreducer from "./Dialogs-reducer";
import Profilereducer from "./Profile-reducer";


let store = {
    _state: {
        ProfilePage1: {
            PostData: [],
            NewPostText: "",
        },
        DialogsPage: {
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
        }
    },

    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.DialogsPage = Dialogsreducer(action, this._state.DialogsPage);
        this._state.ProfilePage = Profilereducer(action, this._state.ProfilePage);
        this._RenderEntireThree();
    },
    subscribe(observer) {
        this._RenderEntireThree = observer;
    },
};


window.store = store;