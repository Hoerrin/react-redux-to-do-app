import * as React from "react";
import './TaskItem.css'

export const TaskItem = ({ title, description, tag, tagColor }) => {

  return (
    <li className="card" key={title}>
      <div className="card__checkbox">
        <div className="card__checkbox--button" style={{border: `2px ${tagColor} solid`}}></div>
      </div>
      <div className="card__content">
        <h1 className="card__content--title">{title}</h1>
        <h2 className="card__content--description">{description}</h2>
      </div>
      <div className="card__controls">
        <div className="card__controls--tag">
          <div className="tag__circle" style={{backgroundColor: `${tagColor}`}}></div>
          <h5 className="tag__name">{tag}</h5>
        </div>
        <div className="card__controls--buttons">
          <button className="card__controls--edit">

          </button>
          <button className="card__controls--delete">

          </button>
        </div>
      </div>
    </li>
  );
};