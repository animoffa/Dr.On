import React from "react";
import p from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode() {
        this.setState({
            editMode: true,
            status: this.props.status,
        })
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.UpdateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div><input onChange={this.onStatusChange} autoFocus={true}
                                  onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/></div>
                    :
                    <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "-"}</span></div>
                }
            </div>
        )
    }

}

export default ProfileStatus;