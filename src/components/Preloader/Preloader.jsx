import React from "react";
import Loader from "../../Images/giphy.gif"
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.wrapper}>
            <img src= {Loader} alt="Loading...."/>
        </div>
    )
}

export default Preloader