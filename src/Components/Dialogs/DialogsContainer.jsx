import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMsg} from "../../Redux/Dialogs-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps=(state)=>{
        return{
            DialogData: state.DialogsPage.DialogData,
            MessageData: state.DialogsPage.MessageData,
            NewText: state.DialogsPage.NewMsgText,
        }

};
    let mapDispatchToProps=(dispatch)=>{
      return{
          addMsg: (value)=>{
              dispatch(addMsg(value));
          }
      }
    };
    export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    )(Dialogs);
