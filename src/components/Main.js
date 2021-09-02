import React from 'react'
import './Main.css';
import { TasksList } from '../features/Tasks/TasksList'

function Main(props) {
    return (
        <div className="main">
            <div className="main__header">
                <h1>Today</h1>
                <label><input type="checkbox"></input> Show completed</label>
            </div>
            <TasksList tasks={props.tasks} />
        </div>
    )
}

export default Main

