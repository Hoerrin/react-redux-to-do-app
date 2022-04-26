import React from 'react'
import './Main.css';
import { TasksList } from './TasksList'
import { useDispatch, useSelector } from "react-redux";
import { changeShowCompleted } from "../features/Tasks/filterTasksSlice";


function Main() {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filterTasks)


    return (
        <div className="main">
            <div className="main__header">
                <h1>My Day</h1>
                <label><input type="checkbox" checked={filter.showCompleted} onChange={() => dispatch(changeShowCompleted())}></input>Show completed</label>
            </div>
            <TasksList />
        </div>
    )
}

export default Main

