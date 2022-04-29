import React, {useEffect, useState} from "react";
import s from './Users.module.css'
import {useDispatch, useSelector,} from "react-redux";
import {getUsersThunk, setCurrentPage} from "../../Redux/reducers/users-reducer";
import UserItem from "./UsersItem/UserItem";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";

const Users = () => {
    const users = useSelector(state => state.users.users)
    const currentPage = useSelector(state => state.users.currentPage)
    const pageSize = useSelector(state => state.users.pageSize)
    const [currentPortion, setCurrentPortion] = useState(1)
    const dispatch = useDispatch()

    const changePage = (page) => {
        dispatch(setCurrentPage(page))
    }

    useEffect(() => {
            dispatch(getUsersThunk(pageSize, currentPage))
        }
        , [currentPage])

    if (users.length === 0) return (
        <div className={s.preloader}>
            <Preloader/>
        </div>
    )
    return (
        <div>
            <Pagination pagesize={pageSize} currentPage={currentPage} changePage={changePage}
                        currentPortion={currentPortion} setCurrentPortion={setCurrentPortion}/>
            <UserItem users={users}/>
        </div>
    )
}

export default Users