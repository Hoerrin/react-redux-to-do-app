import * as React from "react";
import { TaskItem } from "./TaskItem";
import { useSelector } from 'react-redux'
import './TasksList.css'

export function TasksList() {
    //Every task
    const tasks = useSelector((state) => state.tasksList)
    //Filter state
    const activeFilter = useSelector((state) => state.filterTasks.activeFilter)
    //showCompleted toggle
    const showCompleted = useSelector((state) => state.filterTasks.showCompleted)

    const availableFilters = {
        NONE: function(){
                return true
        },
        TEST: function(task){
            if(task.description){
                return true
            }
            return false
        }
    }

    //Create new task component for each task in state
    const taskToTaskItem = task => {
        //Task properties
        const { title, description, taskKey, completed } = task;
        //Tag name and color 
        const {tagName, tagColor} = task.tag;

        //Check if task meet the condition of active filter
        if(!availableFilters[activeFilter](task)){
            return
        }

        //Show every task including completed if showCompleted filter is active
        if (showCompleted) {
            return <TaskItem key={taskKey} title={title} description={description} taskKey={taskKey} completed={completed} tagName={tagName} tagColor={tagColor} />
        }

        //If showCompleted filter isn't active show only active tasks
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
