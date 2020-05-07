import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import Dialogsreducer from "./Dialogs-reducer";
import Profilereducer from "./Profile-reducer";
import Friendsreducer from "./Friends-reducer";
import Authreducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import AppReducer from "./App-reducer";

let reducers =combineReducers({
    DialogsPage: Dialogsreducer,
    ProfilePage: Profilereducer,
    FriendsPage:Friendsreducer,
    Auth:Authreducer,
    form:formReducer,
    App:AppReducer,
});


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store= store;

export default store;