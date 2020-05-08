import React, {Component, Suspense} from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Music from "./Components/Music/Music";
import Login from "./Components/Enter/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/App-reducer";
import spinner from "./image/spinner.gif";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const FriendsContainer = React.lazy(() => import("./Components/friends/FriendsContainer"));

class App extends Component {
    catchAllErrors = (reason, promise) => {
        alert(reason);
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <img src={spinner} width="1035px"/>
        }
        return (
            <BrowserRouter>
                <div className="bg">
                    <div className="main">
                        <HeaderContainer/>
                        <div className="body">
                                <Navigation/>
                            <div className="main__content">
                                <Switch>
                                    <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                                    <Route path="/dialogs" render={() => {
                                        return <Suspense fallback={<div>Загрузка...</div>}>
                                            <DialogsContainer/>
                                        </Suspense>
                                    }}/>
                                    <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                                    <Route path="/friends" render={() => {
                                        return <Suspense fallback={<div>Загрузка...</div>}>
                                            <FriendsContainer/>
                                        </Suspense>
                                    }}/>
                                    <Route path="/music" render={() => <Music/>}/>
                                    <Route path="/login" render={() => <Login/>}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized
});
export default connect(mapStateToProps, {initializeApp})(App);
