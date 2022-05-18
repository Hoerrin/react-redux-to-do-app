import React, { useState } from 'react'
import './Main.css';
import { TasksList } from './TasksList'
import { useDispatch, useSelector } from "react-redux";
import { changeShowCompleted } from "../features/Tasks/filterTasksSlice";
import AddTaskDropdown from './AddTaskDropdown';

function Main() {
    const dispatch = useDispatch()

    const filter = useSelector((state) => state.filterTasks)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const closeDropdown = () => {
        if (isDropdownOpen) {
            const dropdown = document.getElementsByClassName("addTaskDropdown")[0]
            const blur = document.getElementsByClassName("main__blur")[0]
            const textarea = document.getElementsByClassName("addTaskDropdown__input--textarea")[0]

            setIsDropdownOpen(false)
            textarea.style.height = "1em";
            dropdown.classList.add("addTaskDropdown--hidden")
            blur.classList.add("main__blur--hidden")
        }
    }

    const openDropdown = () => {
        const dropdown = document.getElementsByClassName("addTaskDropdown")[0]
        const blur = document.getElementsByClassName("main__blur")[0]
        const taskNameInput = document.getElementById("addTaskDropdown__addTaskInput")
        
        setIsDropdownOpen(true)
        taskNameInput.focus()
        dropdown.classList.remove("addTaskDropdown--hidden")
        blur.classList.remove("main__blur--hidden")
    }

    return (
        <div className="main">
            <div className='main__blur main__blur--hidden'></div>
            <AddTaskDropdown openDropdown={openDropdown} closeDropdown={closeDropdown} />
            <div className="main__header">
                <div className='main__header--container'>
                    <h1>My Day</h1>
                    <button onClick={openDropdown} className='main__addTagButton'>+</button>
                </div>
                <label><input type="checkbox" checked={filter.showCompleted} onChange={() => dispatch(changeShowCompleted())}></input> Show completed</label>
            </div>
            <TasksList />
        </div>
    )
}

export default Main

