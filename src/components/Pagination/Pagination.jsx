import React, {useState} from "react";
import s from './Pagination.module.css'
import {useSelector} from "react-redux";

const Pagination = ({pageSize, currentPage, changePage, currentPortion ,setCurrentPortion}) => {
    const portionSize = useSelector(state => state.users.portionSize)
    const totalUsersCount = useSelector(state => state.users.totalUsersCount)
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize)
    const totalPortionCount = Math.ceil(totalPagesCount / portionSize)

    const firstPage = portionSize * (currentPortion - 1) + 1
    const lastPage = portionSize * currentPortion

    let pages = [];
    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i);
    }

    const nextButtonClick = () => {
        setCurrentPortion(currentPortion + 1)
        changePage(portionSize * (currentPortion) + 1)
    }
    const prevButtonClick = () => {
        setCurrentPortion(currentPortion - 1)
        changePage(portionSize * (currentPortion-2) + 1)
    }

    if (currentPortion === 1)
        return (
            <div className={s.pagination}>
                <div className={s.wrapper}>
                    {pages.map(i => <div key={i} className={(i === currentPage) ? s.activePage : s.page}
                                         onClick={() => changePage(i)}>{i}</div>)}
                </div>
                <button className={s.btn} onClick={nextButtonClick}>NEXT PAGES</button>
            </div>
        )
    if (currentPortion === totalPortionCount)
        return (
            <div className={s.pagination}>
                <button className={s.btn} onClick={prevButtonClick}>PREV PAGES</button>
                <div className={s.wrapper}>
                    {pages.map(i => <div key={i} className={(i === currentPage) ? s.activePage : s.page}
                                         onClick={() => changePage(i)}>{i}</div>)}
                </div>

            </div>
        )
    return (
        <div className={s.pagination}>
            <button className={s.btn} onClick={prevButtonClick}>PREV PAGES</button>
            <div className={s.wrapper}>
                {pages.map(i => <div key={i} className={(i === currentPage) ? s.activePage : s.page}
                                     onClick={() => changePage(i)}>{i}</div>)}
            </div>
            <button className={s.btn} onClick={nextButtonClick}>NEXT PAGES</button>
        </div>
    )
}

export default Pagination