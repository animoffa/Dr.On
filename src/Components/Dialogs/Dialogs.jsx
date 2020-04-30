import React from "react";
import p from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import m from "../Profile/Myposts/Myposts.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator, required} from "../../utilities/Validators";

let maxLength100=maxLengthCreator(100);

let Dialogs = (props) => {

    let Dialog = props.DialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let Messages = props.MessageData.map(message => <MessageItem msg={message.msg}/>);

    let Addmsg = (values) => {
        props.addMsg(values.msgField);
    };

    return <div>
        <div className={p.content}>

            <div className={p.dialogs}>
                {Dialog}
            </div>
            <div className={p.msgs}>
                <div className={p.dialog}>
                    {Messages}
                </div>
                <SetMsgRedux onSubmit={Addmsg}/>
            </div>
        </div>

    </div>
};

const SetMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <Field placeholder="Enter text..."
                   name={"msgField"} component={Textarea}
                   className={p.tarea} validate={[required,maxLength100]}/>
            <button className={p.addmsg}>SEND</button>

        </form>
    )
};

let SetMsgRedux = reduxForm({form: 'dialogForm'})(SetMessage);

export default Dialogs;