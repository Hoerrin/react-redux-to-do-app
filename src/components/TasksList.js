import * as React from "react";
import { TaskItem } from "./TaskItem";
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from "../features/Tasks/tasksListSlice";
import './TasksList.css'


export function TasksList() {
    const tasks = useSelector((state) => state.tasksList)
    const filter = useSelector((state) => state.filterTasks)
    const dispatch = useDispatch()
    
    const taskToTaskItem = task => {
        const {title, description, taskKey, completed} = task;

        const tag = task.tag.name;
        const tagColor = task.tag.color;

        if(filter.showCompleted){
            return <TaskItem key={taskKey} title={title} description={description} taskKey={taskKey} completed={completed} tag={tag} tagColor={tagColor}/>
        }

        if(!completed){
            return <TaskItem key={taskKey} title={title} description={description} taskKey={taskKey} completed={completed} tag={tag} tagColor={tagColor}/>
        }

        return
        
    };

    return (
        <>
            <button onClick={() => dispatch(addTask())}>Create task</button>
            <ul className="tasksList">
                {tasks.map(taskToTaskItem)}
            </ul>
        </>

    );
}
