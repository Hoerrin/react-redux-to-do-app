import * as React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "./tasksListSlice";
import './TaskItem.css'

export const TaskItem = ({ title, description, id, completed, tag, tagColor }) => {
  const dispatch = useDispatch()
  
  return (
    <li className="card" >
      <div className="card__checkbox">
        <div className="card__checkbox--button" style={{ border: `2px ${tagColor} solid` }}></div>
      </div>
      <div className="card__content">
        <h1 className="card__content--title">{title}</h1>
        <p className="card__content--description">{description}</p>
      </div>
      <div className="card__controls">
        <div className="card__controls--tag">
          <div className="tag__circle" style={{ backgroundColor: `${tagColor}` }}></div>
          <h5 className="tag__name">{tag}</h5>
        </div>
        <div className="card__controls--buttons">
          <button className="card__controls--edit">
            EDIT
          </button>
          
          <button onClick={() => dispatch(removeTask(id))} className="card__controls--delete">
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
};