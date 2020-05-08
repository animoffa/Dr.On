import React from "react";
import p from "./ProfileInfo.module.css"
import css from "../../friends/Friends.module.css";
import music from "../../../image/unnamed2.png";
import friends from "../../../image/groups.png";
import message from "../../../image/message.png";
import defaultPhoto from "../../../image/friends.png";
import spinner from "../../../image/spinner.gif";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <img src={spinner} width="1035px" alt="Loading..."/>
    }
    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };
    return (
        <div>
            <img className={p.content__mainImg}
                 src="https://obzor-gazet.ru/wp-content/uploads/2018/10/2571515_programmirovanie.jpg"/>
            <div className={p.profile}>
                <div className={p.img}>
                    <img className={p.userAvatar} alt={"User's avatar"}
                         src={props.profile.photos.large != null ? props.profile.photos.large : defaultPhoto}/>
                    {props.isOwner && <input type={"file"} onChange={onPhotoSelected}/>}
                </div>
                <div className={p.userDescription}>
                    <div className={p.fullName}>{props.profile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} UpdateStatus={props.UpdateStatus}/>
                </div>
                <div>
                    <button className={css.m}><img src={message} className={css.icons} alt={"message"}/></button>
                    <button className={css.m}><img src={friends} className={css.icons} alt={"friends"}/></button>
                    <button className={css.m}><img src={music} className={css.icons} alt={"music"}/></button>
                </div>
            </div>
            <div className={p.line}></div>
        </div>
    );
};

export default ProfileInfo;