import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TagsList } from './TagsList'
import { setFilterNone, clearSelectedTag } from "../features/Tasks/filterTasksSlice";
import './Nav.css'

function Nav() {
    const dispatch = useDispatch()
    //Only tasks marked as completed
    const tasks = useSelector((state) => state.tasksList.filter(task => !task.isCompleted))

    //Change active tag to NONE to show every task and reset selected tag state
    const handleClick = () => {
        dispatch(setFilterNone());
        dispatch(clearSelectedTag());
    }

    return (
        <div className="nav">
            <div className="nav__top">
                <div className="nav__tab">
                    <h3 className="nav__item nav__item--selected" onClick={handleClick}>My Day</h3><p className="nav__itemNumber">{tasks.length}</p>
                </div>
                <div className="nav__tab">
                    <h3 className="nav__item">Important</h3><p className="nav__itemNumber">{tasks.length}</p>
                </div>
                <div className="nav__tab">
                    <h3 className="nav__item">To-Do</h3><p className="nav__itemNumber">{tasks.length}</p>
                </div>
            </div>
            <div className="nav__bottom">
                <TagsList />
            </div>
        </div>
    )
}

export default Nav
