import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMsgCreateAction, updateNewMsgTextCreateAction} from "../../Redux/Dialogs-reducer";

let mapStateToProps=(state)=>{
        return{
            DialogData: state.DialogsPage.DialogData,
            MessageData: state.DialogsPage.MessageData,
            NewText: state.DialogsPage.NewMsgText,
        }

};
    let mapDispatchToProps=(dispatch)=>{
      return{
          updateNewText: (text)=>{
              dispatch(updateNewMsgTextCreateAction(text));
          },
          Addmsg: ()=>{
              dispatch(addMsgCreateAction());
          }
      }
    };
const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;