import style from "./Users.module.css"
import React from "react"
import noAva from "../../../assets/images/25333.png"
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(<span className={i === props.page && style.active}
                         onClick={() => props.getPageUsers(i)}> {i} </span>)
    }
    pages.splice(5, pages.length - 10, "....")


    return (
        <div className={style.wrapper}>
            <h3 className={style.header}> USERS</h3>
            <div className = {style.preloader}>
                {(props.isFetching) ? <Preloader/> : null}
            </div>
            <div className={style.wrapper_users}>
                {props.data.map(el =>
                    <div className={style.user}>
                        <div className={style.ava}>
                            <NavLink to={`/profile/${el.id}`}>
                                <img src={el.photos.small || noAva} alt="ava..."/>
                            </NavLink>
                            {el.isFollow ? <button className={style.btn}
                                                   onClick={() => props.onClick(el.id)}>Unfollow</button> :
                                <button className={style.btn}
                                        onClick={() => props.onClick(el.id)}>Follow</button>}
                        </div>
                        <div className={style.descr}>
                            <div className={style.descr_name_status}>
                                <h2 className={style.descr_name}>{el.name}</h2>
                                <div className={style.descr_status}>{el.status}</div>
                            </div>
                            <div className={style.location}>
                                <div className={style.location_country}>{"el.location.country"}</div>
                                <div className={style.location_city}>{"el.location.city"}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className={style.pagination}>
                {pages}
            </div>
        </div>
    )
}

export default Users
