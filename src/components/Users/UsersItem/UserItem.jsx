import React from "react";
import s from './UserItem.module.css'
import noAva from '../../../Images/depositphotos_227725120-stock-illustration-image-available-icon-flat-vector.jpg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {followThunk, unFollowThunk} from "../../../Redux/reducers/users-reducer";

const UserItem = ({users}) => {

    let disabledButton = useSelector((state) => state.users.disabledButton)
    const dispatch = useDispatch()

    const follow = (id) => dispatch(followThunk(id))
    const unFollow = (id) => dispatch(unFollowThunk(id))

    return (
        users.map(item =>
            <div key={item.id} className={s.user_wrapper}>
                <div className={s.avatar}>
                    <NavLink to={`/users/${item.id}`}><img src={item.photos.small || noAva} alt=""/></NavLink>
                    {(item.followed) ?
                        <button disabled={disabledButton.some(id => id === item.id)} onClick={() => unFollow(item.id)}
                                className={s.btn}>UNFOLLOW</button> :
                        <button disabled={disabledButton.some(id => id === item.id)} onClick={() => follow(item.id)}
                                className={s.btn}>FOLLOW</button>}

                </div>
                <div className={s.descr}>
                    <h1>{item.name}</h1>
                    <p>{item.status || "This user has not status"}</p>
                </div>
            </div>
        )
    )
}

export default UserItem