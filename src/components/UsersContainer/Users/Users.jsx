import style from "./Users.module.css"
import React from "react"
import * as axios from "axios";
import noAva from "../../../assets/images/25333.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    getPageUsers = (page) =>{
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        let pages = [];
        for( let i = 1 ; i <= pageCount ; i++){
            pages.push(<span className={i === this.props.page && style.active} onClick = {() => this.getPageUsers(i)}> {i} </span>)
        }
        pages.splice(5, pages.length-10, "....")


        return (
            <div className={style.wrapper}>
                <h3 className={style.header}> USERS</h3>
                <div className={style.wrapper_users}>
                    {this.props.data.map(el =>
                        <div className={style.user}>
                            <div className={style.ava}>
                                <img src={el.photos.small || noAva} alt="ava..."/>
                                {el.isFollow ? <button className={style.btn}
                                                       onClick={() => this.props.onClick(el.id)}>Unfollow</button> :
                                    <button className={style.btn}
                                            onClick={() => this.props.onClick(el.id)}>Follow</button>}
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
}

export default Users