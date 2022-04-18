import * as React from "react";
import { TaskItem } from "./TaskItem";
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from "./tasksListSlice";
import './TasksList.css'


export function TasksList(props) {
    const tasks = useSelector((state) => state.tasksList)
    const dispatch = useDispatch()
    
    const taskToTaskItem = task => {
        const title = task.title;
        const description = task.description;
        const taskKey = task.taskKey;
        const completed = task.completed;
        const tag = task.tag.name;
        const tagColor = task.tag.color;
        if(props.showCompletedChkbx){
            return <TaskItem key={taskKey} title={title} description={description} taskKey={taskKey} completed={completed} tag={tag} tagColor={tagColor}/>
        }else{
            if(!completed){
                return <TaskItem key={taskKey} title={title} description={description} taskKey={taskKey} completed={completed} tag={tag} tagColor={tagColor}/>
            }else{
                return
            }
        }
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
