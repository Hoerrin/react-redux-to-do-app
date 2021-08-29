import React from 'react'
import './Main.css';
import { TasksList } from '../features/Tasks/TasksList'

function Main(props) {
    return (
        <div className="main">
            <TasksList tasks={props.tasks} /> 
        </div>
    )
}

export default Main

