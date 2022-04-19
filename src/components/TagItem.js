import * as React from "react";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { removeTag} from "./tagsListSlice";
import './TagItem.css'

export const TagItem = ({ name, color}) => {
  //const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasksList)
  const filteredTasks = tasks.filter(task => task.tag.name === name && !task.completed)
  
  return (
    <li className="tagItem">
      <div className="tagItem__circle" style={{backgroundColor: `${color}`}}></div>
      <p className="tagItem__name">{name}</p>
      <p className="tagItem___tasksNumber">{filteredTasks.length}</p>
    </li>
  );
};