import {addPost} from "../../../Redux/Profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        PostData: state.ProfilePage.PostData,
        profile: state.ProfilePage.Profile,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (value) => {
            dispatch(addPost(value))
        }
    }
};
const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
export default MypostsContainer;