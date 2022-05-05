import React, { useState } from 'react'
import './Main.css';
import { TasksList } from './TasksList'
import { useDispatch, useSelector } from "react-redux";
import { changeShowCompleted } from "../features/Tasks/filterTasksSlice";
import AddTaskPU from './AddTaskPU';

function Main() {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filterTasks)

    const [showPopUp, setShowPopUp] = useState(false);

    const switchPopUp = () => {
        let popUp = document.getElementsByClassName("addTaskPU")[0]

        setShowPopUp(!showPopUp)

        if (showPopUp) {
            popUp.classList.add("addTaskPU--hidden")
        } else {
            popUp.classList.remove("addTaskPU--hidden")
        }
    }

    return (
        <div className="main">
            <div className='main_blur'></div>
            <AddTaskPU switchPopUp={switchPopUp} />
            <div className="main__header">
                <div className='main__headerContainer'>
                    <h1>My Day</h1>
                    <button onClick={switchPopUp} className='main__addTagButton'>+</button>
                </div>
                <label><input type="checkbox" checked={filter.showCompleted} onChange={() => dispatch(changeShowCompleted())}></input> Show completed</label>
            </div>
            <TasksList />
        </div>
    )
}

export default Main

