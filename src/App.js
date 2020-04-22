import React from 'react';

import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import FriendsContainer from "./Components/friends/FriendsContainer";
import Login from "./Components/Enter/Login";
import SignUp from "./Components/Enter/SignUp";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="bg">
                <div className="main">
                    <Header/>
                    <Navigation/>
                    <div className="main__content">
                        <Route path="/dialogs" render={()=> <DialogsContainer />}/>
                        <Route path="/profile/:userID?" render={()=> <ProfileContainer />}/>
                        <Route path="/friends" render={()=> <FriendsContainer />}/>
                        <Route path="/music" render={()=> <Music/>}/>
                        <Route path="/news" render={()=> <News/>}/>
                        <Route path="/settings" render={()=> <Settings/>}/>
                        <Route path="/login" render={()=> <Login/>}/>
                        <Route path="/sign-up" render={()=> <SignUp/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
