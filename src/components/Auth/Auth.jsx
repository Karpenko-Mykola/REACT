import React from "react"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import s from "./Auth.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../Redux/reducers/auth-reducer";
import {Navigate} from "react-router-dom";

const Auth = () => {
    const dispatch = useDispatch()
    const userID = useSelector((state) => state.auth.id)
    const captcha = useSelector(state => state.auth.captchaUrl)

    if (userID) return <Navigate to={'/profile'}/>
    return (
        <div className={s.wrapper}>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false, captcha: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'This field can not be required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values,) => {
                    dispatch(loginThunk(values))
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className={s.label}>EMAIL:</div>
                        <Field className={s.field} type="email" name="email"/>
                        <ErrorMessage className={s.error} name="email" component="div"/>
                        <div className={s.label}>PASSWORD:</div>
                        <Field className={s.field} type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                        <div className={s.label}>REMEMBER ME?</div>
                        <Field className={s.field} type="checkbox" name="rememberMe"/>
                        {(captcha) ? <div className={s.captcha}>
                            <img src={captcha} alt="captcha"/>
                            <Field className={s.field} type="text" name="captcha"/>
                        </div> : null}
                        <button  type="submit" className={s.btn}>
                            LOG IN
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Auth