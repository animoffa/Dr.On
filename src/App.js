import React, {Component, Suspense} from 'react';

import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Enter/Login";
import SignUp from "./Components/Enter/SignUp";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/App-reducer";
import spinner from "./image/spinner.gif";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const FriendsContainer = React.lazy(() => import("./Components/friends/FriendsContainer"));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
if (!this.props.initialized){
    return <img src={spinner} width="1035px"/>
}
        return (
            <BrowserRouter>
                <div className="bg">
                    <div className="main">
                        <HeaderContainer/>
                        <div className="body">
                            <div>
                                <Navigation/>
                            </div>
                            <div className="main__content">
                                <Route path="/dialogs" render={() =>{
                                    return <Suspense fallback={<div>Загрузка...</div>}>
                                    <DialogsContainer/>
                                    </Suspense>}}/>
                                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                                <Route path="/friends" render={() => {
                                    return <Suspense fallback={<div>Загрузка...</div>}>
                                        <FriendsContainer/>
                                    </Suspense>}}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                                <Route path="/sign-up" render={() => <SignUp/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps=(state)=> ({
    initialized:state.App.initialized
});
export default connect(mapStateToProps, {initializeApp})(App);
