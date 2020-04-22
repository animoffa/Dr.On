import React from "react";
import P from "./Post1.module.css"

import like from "../../../../image/heart.png"

const Posts1=(props)=>{
   return <div className={P.post}>
        <img className={P.img} src="https://www.meme-arsenal.com/memes/141a6c2a8a5a7267b17ca257da29d03a.jpg"/>
       <div className={P.text}>
           {props.message}
       </div>
       <div>
           <span className={P.like}>
               {props.likecount}
<img className={P.likeimg} src={like}/>
           </span>
       </div>
    </div>
};

export default Posts1;