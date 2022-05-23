import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, completeTask, addTagToTask, toggleEditTask, editTask } from "../features/Tasks/tasksListSlice";
import { addTag } from "../features/Tasks/tagsListSlice"
import { ReactComponent as EditIcon } from '../SVG/edit.svg';
import { ReactComponent as RemoveIcon } from '../SVG/trash.svg';
import { ReactComponent as CancelIcon } from '../SVG/cancel.svg';
import { ReactComponent as CheckIcon } from '../SVG/check.svg';
import './TaskItem.css'


export const TaskItem = ({ title, description, taskKey, isCompleted, isEdited, tagName, tagColor }) => {
  const dispatch = useDispatch()
  const tags = useSelector((state) => state.tagsList)
  const [editTagInput, setEditTagInput] = useState(JSON.stringify({}));
  const [editTitleInput, setEditTitleInput] = useState('');
  const [editDescrInput, setEditDescrInput] = useState('');

  const tagToTagItem = tag => {
    const { tagName, tagColor } = tag;

    return <option key={tagName} value={JSON.stringify({ tagName, tagColor })}>{tagName}</option>
  };

  const handleAddTag = (tagName, tagColor) => {
    //Add tag with provided name and color to the task
    dispatch(addTagToTask({
      taskKey: taskKey,
      tag: {
        tagName: tagName,
        tagColor: tagColor
      }
    }))

    let tagNameAndColor = {
      tagName: tagName,
      tagColor: tagColor
    }

    //Add tag to tags list (new tag will add only if there is no tag with this name) 
    dispatch(addTag(tagNameAndColor))
  }

  const handleClickEditTask = () => {
    //set temp inputs
    setEditTagInput(JSON.stringify({ tagName, tagColor }))
    setEditTitleInput(title)
    setEditDescrInput(description)

    dispatch(toggleEditTask(taskKey))
  }

  const handlekConfirmEditTask = () => {
    let title = editTitleInput
    let description = editDescrInput
    let tag = JSON.parse(editTagInput)

    if (tag) {
      dispatch(addTagToTask({
        taskKey: taskKey,
        tag: {
          tagName: tag.tagName,
          tagColor: tag.tagColor
        }
      }))
    }

    if (title) {
      dispatch(editTask({ title, description, taskKey }))
      dispatch(toggleEditTask(taskKey))
    }

  }

  const handleCancelEdit = () => {
    dispatch(toggleEditTask(taskKey))
  }

  return (
    <li className="card">
      {!isEdited ?
        <>
          <div className="card__checkbox">
            <input onChange={() => dispatch(completeTask(taskKey))} type="checkbox" className="card__checkbox--input" checked={isCompleted} style={{ border: `2px ${tagColor} solid` }} />
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
              <EditIcon onClick={handleClickEditTask} className="buttons__button" />
              <RemoveIcon onClick={() => dispatch(removeTask(taskKey))} className="buttons__button" />
            </div>
          </div>
        </>
        :
        <>
          <div className="card__checkbox">
            <input onChange={() => dispatch(completeTask(taskKey))} disabled type="checkbox" className="card__checkbox--input" checked={isCompleted} style={{ border: `2px ${tagColor} solid` }} />
          </div>
          <div className="card__content">
            <input className="card__content--editTitle" required value={editTitleInput} onChange={(e) => setEditTitleInput(e.target.value)} />
            <textarea className="card__content--editDescription" value={editDescrInput} onChange={(e) => setEditDescrInput(e.target.value)} />
          </div>
          <div className="card__controls">
            <div className="card__tag">
              <select name="taskTag" className='addTaskDropdown__input' value={editTagInput} onChange={(e) => setEditTagInput(e.target.value)}>
                <option key='noneOption' value={JSON.stringify({})}>None</option>
                {tags.map(tagToTagItem)}
              </select>
            </div>
            <div className="card__buttons--container">
              <CancelIcon onClick={handleCancelEdit} className="buttons__button" />
              <CheckIcon onClick={handlekConfirmEditTask} className="buttons__button buttons__button--check" />
            </div>
          </div>
        </>
      }
    </li>
  );
};