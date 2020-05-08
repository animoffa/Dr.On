import React from "react";
import p from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator} from "../../utilities/Validators";

let maxLength500 = maxLengthCreator(500);

let Dialogs = (props) => {
    let Dialog = props.DialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let Messages = props.MessageData.map(message => <MessageItem msg={message.msg}/>);

    let AddMsg = (values) => {
        props.addMsg(values.msgField);
    };

    return <div>
        <div className={p.content}>

            <div className={p.dialogs}>
                {Dialog}
            </div>
            <div>
                <div className={p.dialog}>
                    {Messages}
                </div>
                <SetMsgRedux onSubmit={AddMsg}/>
            </div>
        </div>

    </div>
};

const SetMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={p.sendMsg}>

            <Field placeholder="Enter text..."
                   name={"msgField"} component={Textarea}
                   className={p.textArea} validate={[maxLength500]}/>
            <button className={p.addMsg}>SEND</button>

        </form>
    )
};

let SetMsgRedux = reduxForm({form: 'dialogForm'})(SetMessage);

export default Dialogs;