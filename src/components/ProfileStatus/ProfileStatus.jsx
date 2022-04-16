import React, {useEffect, useState} from "react";


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const changeStatus = () => {
        setEditMode(true)
    }
    const updateStatus = () => {
        setEditMode(false)
        props.setStatusTHUNK(status)
    }
    const onChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    if (editMode) return <input onChange={(e) =>onChange(e)} autoFocus={true}
                                onBlur={updateStatus}
                                value={status}/>
    else return <div onDoubleClick={changeStatus}>{props.status || "----"} </div>

}


export default ProfileStatus