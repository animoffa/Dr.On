import React from "react";
import Profilereducer, {addPost, deletePost} from "./Profile-reducer";

let inicialisateState = {
    PostData: [],
    Profile:null,
    Status:"",
};


it('length of posts should be incremented',()=>{
    let action = addPost("oh my");
    let newState = Profilereducer(inicialisateState,action);

    expect(newState.PostData.length).toBe(1);
});

it('length of posts should be decremented',()=>{
    let action = deletePost(1);
    let newState = Profilereducer(inicialisateState,action);

    expect(newState.PostData.length).toBe(0);
});