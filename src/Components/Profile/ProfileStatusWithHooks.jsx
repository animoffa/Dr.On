import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        props.UpdateStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    return (
        <div>
            {editMode
                ? <div><input onChange={onStatusChange} autoFocus={true}
                              onBlur={deactivateEditMode} value={status}/></div>
                :
                <div><span onDoubleClick={activateEditMode}>{status || "-"}</span></div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;