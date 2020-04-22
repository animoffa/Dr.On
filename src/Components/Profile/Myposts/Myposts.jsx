import React from "react";
import Posts1 from "./Post1/Post1";
import m from "./Myposts.module.css";

const Myposts = (props) => {

    let Posts = props.PostData.map(p => <Posts1 likecount={p.likecount} message={p.msg} id={p.id}/>);

    let NewPost = React.createRef();

    let Addpost1 = () => {
        props.AddPost();
    };

    let onPostChange=()=>{
      let text = NewPost.current.value;
      props.updateNewPostTextCreateAction(text);
    };
    return <div className={m.posts}>
        <div className={m.sendpost}>
            <textarea placeholder="Enter text..." ref={NewPost} className={m.tarea} onChange={onPostChange} value={props.NewPostText}/>
            <button className={m.addpost} onClick={Addpost1}>ADD POST</button>
        </div>
        {Posts}
    </div>
};

export default Myposts;