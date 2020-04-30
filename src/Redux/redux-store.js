import {applyMiddleware, combineReducers, createStore} from "redux";
import Dialogsreducer from "./Dialogs-reducer";
import Profilereducer from "./Profile-reducer";
import Friendsreducer from "./Friends-reducer";
import Authreducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import AppReducer from "./App-reducer";

let redusers =combineReducers({
    DialogsPage: Dialogsreducer,
    ProfilePage: Profilereducer,
    FriendsPage:Friendsreducer,
    Auth:Authreducer,
    form:formReducer,
    App:AppReducer,
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));
window.store= store;

export default store;