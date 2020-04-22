import React from "react";
import m from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = () => {
    return <header className={m.header} >
        <div className={m.s}>
        <img className={m.header__logo}
             src="https://avatars.mds.yandex.net/get-pdb/932587/4647e891-a03c-4e47-8ac1-a6bafabb2438/orig" alt="logo"/>
        <span className={m.name}>Dr.On</span>
        </div>
        <div>
            <div >
                <NavLink to="/login" > login</NavLink>
            </div>
            <div >
                <NavLink to="/sign-up"  > Sign-up</NavLink>
            </div>
        </div>
    </header>

};
export default Header;