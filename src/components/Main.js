import React from 'react'
import './Main.css';
import { TasksList } from './TasksList'
import { useDispatch, useSelector } from "react-redux";
import { changeShowCompleted } from "../features/Tasks/filterTasksSlice";
import AddTaskPU from './AddTaskPU';

function Main() {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filterTasks)

    const switchPopUp = (bool) => {
        let popUp = document.getElementsByClassName("addTaskPU")[0]
        let blur = document.getElementsByClassName("main__blur")[0]

        if (bool === true) {
            popUp.classList.remove("addTaskPU--hidden")
            blur.classList.remove("main__blur--hidden")
        }
        if (bool === false) {
            popUp.classList.add("addTaskPU--hidden")
            blur.classList.add("main__blur--hidden")
        }
    }

    return (
        <div className="main">
            <div className='main__blur main__blur--hidden'></div>
            <AddTaskPU switchPopUp={switchPopUp} />
            <div className="main__header">
                <div className='main__headerContainer'>
                    <h1>My Day</h1>
                    <button onClick={() => switchPopUp(true)} className='main__addTagButton'>+</button>
                </div>
                <label><input type="checkbox" checked={filter.showCompleted} onChange={() => dispatch(changeShowCompleted())}></input> Show completed</label>
            </div>
            <TasksList />
        </div>
    )
}

export default Main

