import React from "react";
import Posts1 from "./Post1/Post1";
import m from "./Myposts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/Validators";
import {Textarea} from "../../FormControls/FormControls";

let maxLength100=maxLengthCreator(100);

const Myposts = (props) => {

    let Posts = props.PostData.map(p => <Posts1 likecount={p.likecount} message={p.msg} id={p.id}/>);

    let Addpost1 = (value) => {
        props.AddPost(value.PostText);
    };

    return <div className={m.posts}>
        <SetPostRedux onSubmit={Addpost1}/>
        {Posts}
    </div>
};

const SetPost=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div className={m.sendpost}>
            <Field validate={[required,maxLength100]} placeholder="Enter text..."  className={m.tarea}  name="PostText" component={Textarea} />
            <button className={m.addpost}>ADD POST</button>
        </div>
</form>
    )
};

let SetPostRedux= reduxForm({form: 'PostForm'})(SetPost);

export default Myposts;