import React from 'react'
import './Main.css';
import { TasksList } from '../features/Tasks/TasksList'
import { useState } from 'react';

function Main() {
    const [showCompletedChkbx, setShowCompletedChkbx] = useState(false);

    const handleClick = () => {
        setShowCompletedChkbx(!showCompletedChkbx)
    }
    
    return (
        <div className="main">
            <div className="main__header">
                <h1>Today</h1>
                <label><input type="checkbox" checked={showCompletedChkbx.value} onChange={handleClick}></input>Show completed</label>
            </div>
            <TasksList showCompletedChkbx={showCompletedChkbx}/>
        </div>
    )
}

export default Main

