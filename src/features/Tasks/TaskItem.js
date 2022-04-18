import * as React from "react";
import { useDispatch } from "react-redux";
import { removeTask, clickTaskCheckbox, addTagToTask } from "./tasksListSlice";
import './TaskItem.css'


export const TaskItem = ({ title, description, taskKey, completed, tag, tagColor }) => {
  const dispatch = useDispatch()
  
  const handleAddTag = () => {
    dispatch(addTagToTask({
      itemIndex: taskKey, 
      tag: {
        name: "tag2",
        color: "#f0f"
      }
    }))
  }
  
  return (
    <li className="card">
      <div className="card__checkbox">
        <input onChange={() => dispatch(clickTaskCheckbox(taskKey))} type="checkbox" className="card__checkbox--input" checked={completed} style={{ border: `2px ${tagColor} solid` }}/>
      </div>
      <div className="card__content">
        <h1 className="card__content--title">{title}</h1>
        <p className="card__content--description">{description}</p>
      </div>
      <div className="card__controls">
        <div className="card__controls--tag">
          <div className="tag__circle" onClick={handleAddTag} style={{ backgroundColor: `${tag? tagColor : 'gray'}` }}></div>
          <h5 className="tag__name">{tag ? tag : 'no tag'}</h5>
        </div>
        <div className="card__controls--buttons">
          <button className="card__controls--edit">
            EDIT
          </button>
          <button onClick={() => dispatch(removeTask(taskKey))} className="card__controls--delete">
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
};