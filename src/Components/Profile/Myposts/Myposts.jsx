import React from "react";
import Posts1 from "./Post1/Post1";
import m from "./Myposts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utilities/Validators";
import {Textarea} from "../../FormControls/FormControls";

let maxLength500 = maxLengthCreator(500);

const Myposts = React.memo((props) => {
    let Posts = props.PostData.map(p => <Posts1 likecount={p.likecount} message={p.msg} id={p.id}
                                                profile={props.profile}/>);
    let Addpost1 = (value) => {
        props.AddPost(value.PostText);
    };

    return <div>
        <SetPostRedux onSubmit={Addpost1}/>
        {Posts}
    </div>
});

const SetPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={m.sendPostForm}>

            <Field validate={[maxLength500]} placeholder="Enter text..." className={m.textArea} name="PostText"
                   component={Textarea}/>
            <button className={m.addPost}>ADD POST</button>
        </form>
    )
};

let SetPostRedux = reduxForm({form: 'PostForm'})(SetPostForm);

export default Myposts;