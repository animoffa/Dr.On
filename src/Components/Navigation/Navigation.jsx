import React from "react";
import nav from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import css from "../friends/Friends.module.css";
import message from "../../image/message.png";
import music from "../../image/unnamed2.png";
import friends from "../../image/unnamed.png";


const Navigation = () => {
    return <nav className={nav.sidebar}>
        <div className={nav.sidebar__item}>
            <NavLink to="/profile" className={nav.sidebar__item} activeClassName={nav.active}>
                <span className={nav.words}> Profile</span> <img src={music} className={nav.icons} width="60px"/>
            </NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/news" className={nav.sidebar__item} activeClassName={nav.active}>
                <span className={nav.words}> News</span> <img src={music} className={nav.icons} width="60px"/>
            </NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/dialogs" className={nav.sidebar__item} activeClassName={nav.active}>
               <span className={nav.words}> Messages</span><img src={message} className={nav.icons} width="50px"/>
            </NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/music" className={nav.sidebar__item} activeClassName={nav.active}>
                <span className={nav.words}> Music</span> <img src={music} className={nav.icons} width="60px"/>
            </NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/friends" className={nav.sidebar__item} activeClassName={nav.active}>
                <span className={nav.words}> Friends</span><img src={friends} className={nav.icons} width="60px"/>
            </NavLink>
        </div>

    </nav>
};

export default Navigation;