import React, {useEffect, useState} from "react";
import s from "./Settings.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
    getProfile,
    getStatus,
    setNewPhoto,
    setNewStatusThunk,
    setProfileThunk
} from "../../Redux/reducers/users-reducer";
import Preloader from "../Preloader/Preloader";
import {ErrorMessage, Field, Form, Formik} from "formik";


const Settings = () => {
    const profile = useSelector(state => state.users.profile)
    const status = useSelector(state => state.users.myStatus)
    const userId = useSelector(state => state.auth.id)
    const successStatus = useSelector(state => state.users.initialStatus)
    const dispatch = useDispatch()
    const [avatar, setAvatar] = useState(null)
    const [newStatus, setStatus] = useState(status)

    useEffect(() => {
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }, [dispatch])

    useEffect(() => {
        setStatus(status)
    }, [status])

    const changeAva = (newImg) => {
        dispatch(setNewPhoto(newImg))
    }

    const changeStatus = (newStatus) => {
        setStatus(newStatus)
    }

    if (profile && status) return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <h3>Change Avatar</h3>
                <img src={profile.photos.large} alt="avatar"/>
                <input type="file" onBlur={(e) => setAvatar(e.target.files[0])}/>
                <button disabled={!avatar} onClick={() => changeAva(avatar)}>Change Image</button>
            </div>
            <div className={s.status}>
                <h3>Change Status</h3>
                <input type="text" value={newStatus}
                       onChange={(e) => changeStatus(e.target.value)}/>
                <button disabled={(newStatus === status)}
                        onClick={() => dispatch(setNewStatusThunk(newStatus))}>Change Status
                </button>
            </div>
            <div className={s.form_wrapper}>
                <h3>Change Profile Information</h3>
                <Formik
                    initialValues={{
                        fullName: `${profile.fullName}`,
                        AboutMe: `${profile.AboutMe}`,
                        lookingForAJob: `${profile.lookingForAJob}`,
                        lookingForAJobDescription: `${profile.lookingForAJobDescription}`,
                        contacts: {
                            github: `${profile.contacts.github}`,
                            vk: `${profile.contacts.vk}`,
                            facebook: `${profile.contacts.facebook}`,
                            instagram: `${profile.contacts.instagram}`,
                            twitter: `${profile.contacts.twitter}`,
                            website: `${profile.contacts.website}`,
                            youtube: `${profile.contacts.youtube}`,
                            mainLink: `${profile.contacts.mainLink}`,
                        }

                    }}
                    onSubmit={(values,) => {
                        dispatch(setProfileThunk(values))
                    }}
                >
                    <Form>
                        <div className={s.label}>Full Name</div>
                        <Field className={s.field} type="text" name="fullName"/>

                        <div className={s.label}>About Me</div>
                        <Field className={s.field} type="text" name="AboutMe"/>

                        <div className={s.label}>Looking For A Job</div>
                        <Field className={s.field} type="checkbox" name="lookingForAJob"/>

                        <div className={s.label}>looking For A Job Description</div>
                        <Field className={s.field} type="text" name="lookingForAJobDescription"/>

                        <div><b>Contacts</b></div>
                        <div className={s.label}>github</div>
                        <Field className={s.field} type="text" name="contacts.github"/>

                        <div className={s.label}>vk</div>
                        <Field className={s.field} type="text" name="contacts.vk"/>

                        <div className={s.label}>facebook</div>
                        <Field className={s.field} type="text" name="contacts.facebook"/>

                        <div className={s.label}>instagram</div>
                        <Field className={s.field} type="text" name="contacts.instagram"/>

                        <div className={s.label}>twitter</div>
                        <Field className={s.field} type="text" name="contacts.twitter"/>

                        <div className={s.label}>website</div>
                        <Field className={s.field} type="text" name="contacts.website"/>

                        <div className={s.label}> youtube</div>
                        <Field className={s.field} type="text" name="contacts.youtube"/>

                        <div className={s.label}>mainLink</div>
                        <Field className={s.field} type="text" name="contacts.mainLink"/>

                        <button type="submit">SAVE CHANGES</button>
                    </Form>
                </Formik>
            </div>
            {(successStatus === true)? <span className={s.success}>Changed successful</span> : null}
            {(successStatus === false)?  <span className={s.error}>Something wrong</span> : null}
        </div>
    )
    return <div className={s.preloader}><Preloader/></div>
}

export default Settings