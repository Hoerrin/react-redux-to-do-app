import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTag } from "../features/Tasks/tagsListSlice";
import { changeSelectedTag, setFilterTag, clearSelectedTag, setFilterNone } from "../features/Tasks/filterTasksSlice";
import { removeTagFromTask } from "../features/Tasks/tasksListSlice";
import './TagItem.css'

export const TagItem = ({ tagName, tagColor }) => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasksList)
  const selectedTag = useSelector((state) => state.filterTasks.selectedTag)

  //Tasks using this tag AND marked as completed
  const filteredTasks = tasks.filter(task => task.tag.tagName === tagName && !task.isCompleted)

  const handleRemoveTag = () => {
    //Tasks using this tag
    const tasksUsingTag = tasks.filter(task => task.tag.tagName === tagName)

    //If deleted tag was set as selectedTag, clear selected tag and set filter to NONE
    if (tagName === selectedTag) {
      dispatch(setFilterNone())
      dispatch(clearSelectedTag())
    }

    //Remove tag
    dispatch(removeTag(tagName))

    //Remove tag from tasks using it
    tasksUsingTag.forEach((task) => dispatch(removeTagFromTask(task.taskKey)))
  }

  const handleSelectTag = (tagName) => {
    dispatch(changeSelectedTag(tagName))
    dispatch(setFilterTag())
  }

  return (
    <li className="tagItem">
      <div className="tagItem__container--left">
        <div className="tagItem__circle" style={{ backgroundColor: `${tagColor}` }}></div>
        <p className="tagItem__name" onClick={() => handleSelectTag(tagName)}>{tagName}</p>
      </div>
      <div className="tagItem__container--left">
        <p className="tagItem__tasksNumber">{filteredTasks.length}</p>
        <button className="tagItem__removeButton" onClick={handleRemoveTag}>X</button>
      </div>
    </li>
  );
};