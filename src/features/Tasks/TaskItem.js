import * as React from "react";
import './TaskItem.css'

export const TaskItem = ({ title, description }) => {
  return (
    <li className="card" key={title}>
            <h1>{title}</h1>
            <h2>{description}</h2>
    </li>
  );
};
