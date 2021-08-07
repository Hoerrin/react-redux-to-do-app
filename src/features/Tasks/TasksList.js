import * as React from "react";
import { TaskItem } from "./TaskItem";
import { useSelector } from 'react-redux'


export function TasksList() {
    const tasks = useSelector((state) => state.tasksList)

    const taskToTaskItem = task => {
        const title = task.title;
        const description = task.description;
        return <TaskItem  title={title} description={description} />;
    };

    return (
        <ul className="">
            {tasks.map(taskToTaskItem)}
        </ul>
    );
}
