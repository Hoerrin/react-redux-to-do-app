import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTag } from "../features/Tasks/tagsListSlice";
import { removeTagFromTask } from "../features/Tasks/tasksListSlice";
import './TagItem.css'

export const TagItem = ({ tagName, tagColor }) => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasksList)

  //Tasks using this tag AND marked as completed
  const filteredTasks = tasks.filter(task => task.tag.tagName === tagName && !task.completed)

  const handleRemoveTag = () => {
    //Tasks using this tag
    const tasksUsingTag = tasks.filter(task => task.tag.tagName === tagName)
    
    //Remove tag
    dispatch(removeTag(tagName))

    //Remove tag from tasks using it
    tasksUsingTag.forEach((task) => dispatch(removeTagFromTask(task.taskKey)))
  }

  return (
    <li className="tagItem">
      <div className="tagItem__circle" style={{ backgroundColor: `${tagColor}` }}></div>
      <p className="tagItem__name">{tagName}</p>
      <p className="tagItem__tasksNumber">{filteredTasks.length}</p>
      <button className="tagItem__removeButton" onClick={handleRemoveTag}>X</button>
    </li>
  );
};