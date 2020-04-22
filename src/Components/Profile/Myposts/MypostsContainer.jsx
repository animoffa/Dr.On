import React from "react";
import {addPostCreateAction, updateNewPostTextCreateAction} from "../../../Redux/Profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return {
        PostData: state.ProfilePage.PostData,
        NewPostText: state.ProfilePage.NewPostText
    }
};
let mapDispatchToProps=(dispatch)=>{
    return {
        updateNewPostTextCreateAction: (text) => {
dispatch(updateNewPostTextCreateAction(text))
        },
        AddPost: ()=>{
            dispatch(addPostCreateAction())
        }
}
};
const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);
export default MypostsContainer;