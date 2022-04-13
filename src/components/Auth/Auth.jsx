import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Navigate} from "react-router-dom";

const Auth = (props) => {
    if(props.isAuth) return <Navigate to={"/profile"}/>
    return (
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            validationSchema={Yup.object({
                email: Yup.string()
                    .max(25, 'Must be 25 characters or less')
                    .required('Required'),
                password: Yup.string().required("Please provide a valid password")
            })}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values);
                props.loginTHUNK(values)
                setSubmitting(false);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">LOGIN</label>
                    <input
                        id="email"
                        type="text"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}

                    <label htmlFor="password">PASSWORD</label>
                    <input
                        id="password"
                        type="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}

                    <label htmlFor="rememberMe">REMEMBER ME</label>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        {...formik.getFieldProps('rememberMe')}
                    />

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
};

export default Auth