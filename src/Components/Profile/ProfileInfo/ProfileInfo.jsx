import React from "react";

import p from "./ProfileInfo.module.css"
import css from "../../friends/Friends.module.css";
import music from "../../../image/unnamed2.png";
import friends from "../../../image/unnamed.png";
import groups from "../../../image/groups.png";
import photos from "../../../image/photos.png";
import message from "../../../image/message.png";
import defaultPhoto from "../../../image/friends.png";
import ProfileStatus from "../ProfileStatus";
import spinner from "../../../image/spinner.gif";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
if(!props.profile){
    return <img src={spinner} width="1035px"/>
}
    return (
        <div>
            <img className={p.content__mainimg}
                 src="https://obzor-gazet.ru/wp-content/uploads/2018/10/2571515_programmirovanie.jpg"/>
            <div className={p.profile}>
                <img className={p.useravatar}
                     src={props.profile.photos.large!= null ? props.profile.photos.large : defaultPhoto}/>
                <div className={p.userdescription}>
                    <div className={p.fullName}>{props.profile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} UpdateStatus={props.UpdateStatus}/>
                </div>
                <div className={p.butt}>
                <button className={css.m}><img src={message} className={css.icons} width="60px"/></button>
                <button className={css.m}><img src={music} className={css.icons} width="60px"/></button>
                <button className={css.m}><img src={friends} className={css.icons} width="60px"/></button>
                <button className={css.m}><img src={groups} className={css.icons} width="60px"/></button>
                <button className={css.m}><img src={photos} className={css.icons} width="60px"/></button>
                </div>
            </div>
            <div className={p.line}></div>
        </div>
    );
};

export default ProfileInfo;