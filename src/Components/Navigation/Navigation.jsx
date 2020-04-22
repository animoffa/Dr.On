import React from "react";
import nav from "./Navigation.module.css";
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return <nav className={nav.sidebar}>
        <div className={nav.sidebar__item}>
            <NavLink to="/profile" className={nav.sidebar__item} activeClassName={nav.active}> Profile</NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/news" className={nav.sidebar__item} activeClassName={nav.active}> News</NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/dialogs" className={nav.sidebar__item} activeClassName={nav.active}> Messages</NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/music" className={nav.sidebar__item} activeClassName={nav.active}> Music</NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/friends" className={nav.sidebar__item} activeClassName={nav.active}> Friends</NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/settings" className={nav.sidebar__item} activeClassName={nav.active}> Settings</NavLink>
        </div>
    </nav>
};

export default Navigation;