import style from "./Users.module.css"
import React from "react"
import * as axios from "axios";
import noAva from "../../../assets/images/25333.png"

const Users = (props) => {
    if(props.data.users.length == 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUsers(response.data.items)
        })
    }

    let userElements = props.data.users.map(el =>
        <div className={style.user}>
            <div className={style.ava}>
                <img src={el.photos.small|| noAva} alt="ava..."/>
                {el.isFollow ? <button className={style.btn} onClick = {() => props.onClick(el.id) }>Unfollow</button> :
                    <button className={style.btn} onClick = {() => props.onClick(el.id)}>Follow</button>}
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

    return (
        <div className={style.wrapper}>
            <h3 className={style.header}> USERS</h3>
            <div className={style.wrapper_users}>
                {userElements}
            </div>
        </div>
    )
}
export default Users