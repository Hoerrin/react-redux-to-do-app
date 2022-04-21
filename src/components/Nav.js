import React from 'react'
import { useSelector } from 'react-redux'
import { TagsList } from './TagsList'
import './Nav.css'

function Nav() {
    //Only tasks marked as completed
    const tasks = useSelector((state) => state.tasksList.filter(task => !task.completed))

    return (
        <div className="nav">
            <div className="nav__top">
                <div className="nav__tab">
                    <h3 className="nav__item nav__item--selected">Today</h3><p className="nav__itemNumber">{tasks.length}</p>
                </div>
                <div className="nav__tab">
                    <h3 className="nav__item">Next 7 days</h3><p className="nav__itemNumber">{tasks.length}</p>
                </div>
                <div className="nav__tab">
                    <h3 className="nav__item">Bin</h3><p className="nav__itemNumber">6</p>
                </div>
            </div>
            <div className="nav__bottom">
                <TagsList />
            </div>
        </div>
    )
}

export default Nav
