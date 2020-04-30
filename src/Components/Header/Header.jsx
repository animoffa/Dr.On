import React from "react";
import m from "./Header.module.css";
import {NavLink} from "react-router-dom";
import exit from "./../../image/ext.png"


const Header = (props) => {

    return <header className={m.header} >
        <div className={m.s}>
        <img className={m.header__logo}
             src="https://avatars.mds.yandex.net/get-pdb/932587/4647e891-a03c-4e47-8ac1-a6bafabb2438/orig" alt="logo"/>
        <span className={m.name}>Dr.On</span>
        </div>
        <div className={m.auth}>
            <div className={m.authLogin}>
                {props.isAuth ? <button>{props.login}</button>: <NavLink to="/login" > login</NavLink>}

            </div>
            <div >
                {props.isAuth
                    ? <div onClick={props.logout}><img src={exit} alt="Logout" width="35px" /></div>
                    : <NavLink to="/sign-up"  > Sign-up</NavLink>}
            </div>
        </div>
    </header>

};

export default Header;