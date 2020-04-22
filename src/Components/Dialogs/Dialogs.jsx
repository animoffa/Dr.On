import React from "react";
import p from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import m from "../Profile/Myposts/Myposts.module.css";


const Dialogs = (props) => {

    let Dialog = props.DialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let Messages = props.MessageData.map(message => <MessageItem msg={message.msg}/>);

    let Newmsg = React.createRef();

    let Addmsg1 = () => {
        props.Addmsg();
    };
    let onMsgChange = () => {
        let text = Newmsg.current.value;
        props.updateNewText(text);
    };
    debugger;
    return <div>
        <div className={p.content}>

            <div className={p.dialogs}>
                {Dialog}
            </div>

            <div className={p.dialog}>
                {Messages}

            </div>

            <div className={p.sendmsg}>

                <textarea placeholder="Enter text..." ref={Newmsg} onChange={onMsgChange} value={props.NewMsgText}
                          className={m.tarea}/>
                <button className={p.addmsg} onClick={Addmsg1}>SEND</button>
            </div>
        </div>

    </div>
};
export default Dialogs;