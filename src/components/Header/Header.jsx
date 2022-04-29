import React from "react"
import s from './Header.module.css'
import gitImg from "../../Images/git.png"
import {useDispatch, useSelector} from "react-redux";
import {logOutThunk} from "../../Redux/reducers/auth-reducer";


const Header = () => {
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)
    const login = useSelector((state) => state.auth.login)
    const dispatch = useDispatch()
    const onclick = () => {
        dispatch(logOutThunk())
    }
    return (
        <div className={s.wrapper}>
            <a href="https://github.com/Karpenko-Mykola"> <img src={gitImg} alt="logo"/></a>
            {(isAuthorized)? <div><h2>{login}</h2> <div className={s.logout} onClick={onclick}>LOG OUT</div></div> : <h2>LOGIN</h2>}
        </div>
    )
}

export default Header