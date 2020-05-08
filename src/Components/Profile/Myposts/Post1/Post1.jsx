import React from "react";
import P from "./Post1.module.css"
import like from "../../../../image/heart.png"
import defaultPhoto from "../../../../image/friends.png";

const Posts1 = (props) => {
    return <div className={P.post}>
        <img className={P.img} src={props.profile.photos.large != null ? props.profile.photos.large : defaultPhoto} alt={"User's avatar"}/>
        <div className={P.text}>
            {props.message}
        </div>
        <div>
           <span className={P.like}>
               {props.likecount}
               <img className={P.likeImg} src={like} alt={"likes"}/>
           </span>
        </div>
    </div>
};

export default Posts1;