import React from "react";
import style from './UserProfile.module.css'
import Preloader from "../../Preloader/Preloader";
import noAva from "../../../assets/images/25333.png"

const UserProfile = (props) => {
    if (!props.data)
        return <Preloader/>
    return (
        <div className={style.person}>
            <img className={style.person_ava}
                 src={props.data.photos.small || noAva}
                 alt="ava"/>
            <div className={style.person_descr}>
                <h3 className={style.person_descr_name}> {props.data.fullName}</h3>
                <p className={style.person_descr_info}>{props.data.aboutMe || "NO STATUS(("}</p>
                <p className={style.person_descr_info}>Looking for a
                    job: {(props.data.lookingForAJob) ? "Yes" : "NO"}</p>
                <p className={style.person_descr_info}>Web Site
                    : {props.data.contacts.facebook || props.data.contacts.website || "No contacts("}</p>
            </div>
        </div>
    )
}
export default UserProfile