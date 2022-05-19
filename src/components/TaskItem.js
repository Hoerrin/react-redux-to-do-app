import * as React from "react";
import { useDispatch } from "react-redux";
import { removeTask, clickTaskCheckbox, addTagToTask } from "../features/Tasks/tasksListSlice";
import { addTag } from "../features/Tasks/tagsListSlice"
import { ReactComponent as EditIcon } from '../SVG/edit.svg';
import { ReactComponent as RemoveIcon } from '../SVG/trash.svg';
import { ReactComponent as CancelIcon } from '../SVG/cancel.svg';
import { ReactComponent as CheckIcon } from '../SVG/check.svg';
import './TaskItem.css'


export const TaskItem = ({ title, description, taskKey, isCompleted, isEdited, tagName, tagColor }) => {
  const dispatch = useDispatch()

  const handleAddTag = (tagName, tagColor) => {
    //Add tag with provided name and color to the task
    dispatch(addTagToTask({
      taskKey: taskKey,
      tag: {
        tagName: tagName,
        tagColor: tagColor
      }
    }))

    let nameAndColor = {
      tagName: tagName,
      tagColor: tagColor
    }

    //Add tag to tags list (new tag will add only if there is no tag with this name) 
    dispatch(addTag(nameAndColor))
  }

  return (
    <li className="card">
      <div className="card__checkbox">
        <input onChange={() => dispatch(clickTaskCheckbox(taskKey))} type="checkbox" className="card__checkbox--input" checked={isCompleted} style={{ border: `2px ${tagColor} solid` }} />
      </div>
      <div className="card__content">
        <h1 className="card__content--title">{title}</h1>
        <p className="card__content--description">{description}</p>
      </div>
      <div className="card__controls">
        <div className="card__tag">
          <div className="tag__circle" onClick={() => handleAddTag("tagTestowy", "blue")} style={{ backgroundColor: `${tagColor ? tagColor : 'gray'}` }}></div>
          <h5 className="tag__name">{tagName ? tagName : 'no tag'}</h5>
        </div>
        <div className="card__buttons--container">
          {isEdited ?
            <>
              <EditIcon className="buttons__button" />
              <RemoveIcon onClick={() => dispatch(removeTask(taskKey))} className="buttons__button" />
            </>
            :
            <>
              <CancelIcon className="buttons__button"/>
              <CheckIcon className="buttons__button"/>
            </>
          }
        </div>
      </div>
    </li>
  );
};