import * as React from "react";
import { TaskItem } from "./TaskItem";
import { useSelector } from 'react-redux'
import './TasksList.css'


export function TasksList() {
    //Every task
    const tasks = useSelector((state) => state.tasksList)
    //Selected filters for viewing tasks
    const filter = useSelector((state) => state.filterTasks)

    //Create new task component for each task in state
    const taskToTaskItem = task => {
        const { title, description, taskKey, completed } = task;

        //Tag name and color 
        const {tagName, tagColor} = task.tag;

        //Show every task including completed if showCompleted filter is active
        if (filter.showCompleted) {
            return <TaskItem key={taskKey} title={title} description={description} taskKey={taskKey} completed={completed} tagName={tagName} tagColor={tagColor} />
        }

        //If showCompleted filter isn't active show only completed tasks
        if (!completed) {
            return <TaskItem key={taskKey} title={title} description={description} taskKey={taskKey} completed={completed} tagName={tagName} tagColor={tagColor} />
        }

        return

    };

    return (
        <>
            <ul className="tasksList">
                {tasks.map(taskToTaskItem)}
            </ul>
        </>

    );
}
