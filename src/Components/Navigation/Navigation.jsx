import React from "react";
import nav from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import message from "../../image/message.png";
import music from "../../image/unnamed2.png";
import profile from "../../image/unnamed.png";
import friends from "../../image/groups.png"



const Navigation = () => {
    return <nav className={nav.sidebar}>
        <div className={nav.sidebar__item}>
            <NavLink to="/profile" className={nav.navItem} activeClassName={nav.active}>
                <span className={nav.words}> Profile</span> <img src={profile} className={nav.icons} alt={"Profile"}/>
            </NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/dialogs" className={nav.navItem} activeClassName={nav.active}>
               <span className={nav.words}> Messages</span><img src={message} className={nav.icons}  alt="Messages"/>
            </NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/music"  className={nav.navItem} activeClassName={nav.active}>
                <span className={nav.words}> Music</span> <img src={music} className={nav.icons}  alt="Music"/>
            </NavLink>
        </div>
        <div className={nav.sidebar__item}>
            <NavLink to="/friends" className={nav.navItem} activeClassName={nav.active}>
                <span className={nav.words}> Friends</span><img src={friends} className={nav.icons}  alt="Friends"/>
            </NavLink>
        </div>

    </nav>
};

export default Navigation;