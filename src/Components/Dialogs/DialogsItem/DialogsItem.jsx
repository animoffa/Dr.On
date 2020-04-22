import React from "react";
import p from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path} className={p.unlink} activeClassName={p.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;