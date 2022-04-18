import React from "react";
import style from './Avatar.module.css'

const Avatar = (props) => {
    const onChange = (e) => {
        if(e.target.files.length)
            props.setAvaTHUNK(e.target.files[0])
    }

    return(
        <div className={style.wrapper}>
            <input type="file" onChange={onChange}/>
        </div>
    )
    
}

export default Avatar