import {combineReducers, createStore} from "redux";
import Dialogsreducer from "./Dialogs-reducer";
import Profilereducer from "./Profile-reducer";
import Friendsreducer from "./Friends-reducer";

let redusers =combineReducers({
    DialogsPage: Dialogsreducer,
    ProfilePage: Profilereducer,
    FriendsPage:Friendsreducer
});

let store = createStore(redusers);
window.store= store;

export default store;