import React from "react";
import p from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";

const Profile = (props) => {
    return <div className={p.content}>
        <ProfileInfo profile={props.profile} status={props.status}
                     UpdateStatus={props.UpdateStatus} isOwner={props.isOwner}
                     savePhoto={props.savePhoto}/>
        <MypostsContainer store={props.store}/>
    </div>

};
export default Profile;