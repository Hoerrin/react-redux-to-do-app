import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/Tasks/tasksListSlice'
import './AddTaskDropdown.css'

function AddTaskDropdown(props) {
  const tags = useSelector((state) => state.tagsList)
  const dispatch = useDispatch()

  //Dropdown state
  const [dropdownState, setDropdownState] = useState({});

  //Add key/update value in state object when change in inputs occurred
  const handleChange = ({ target }) => {
    const { name, value } = target

    setDropdownState((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  //Create new option for each tag in state
  const tagToTagItem = tag => {
    const { tagName, tagColor } = tag;

    return <option key={tagName} value={JSON.stringify({ tagName, tagColor })}>{tagName}</option>
  };

  const handleAddTask = (e) => {
    e.preventDefault()
    const { taskTitle, taskDescription, taskTag = JSON.stringify({})} = dropdownState;

    if (taskTitle) {
      dispatch(addTask({ taskTitle, taskDescription, taskTag }))
      setDropdownState({})
      props.closeDropdown()
      return
    }
  }

  const handleCloseDropdown = () => {
    setDropdownState({})
    props.closeDropdown()
    return
  }

  return (
    <form className='addTaskDropdown addTaskDropdown--hidden' onSubmit={handleAddTask}>
      <label className='addTaskDropdown__label' id='addTaskDropdown__addTaskInput'>Task name <input type="text" required className='addTaskDropdown__input' maxLength={85} value={dropdownState.taskTitle || ''} name='taskTitle' onChange={handleChange} /></label>
      <label className='addTaskDropdown__label'>Description <textarea type='textarea' placeholder='optional' className='addTaskDropdown__input addTaskDropdown__input--textarea' maxLength={300} value={dropdownState.taskDescription || ''} name="taskDescription" onChange={handleChange} /></label>
      <label className='addTaskDropdown__label'>
        Tag
        <select className='addTaskDropdown__input addTaskDropdown__input--select' value={dropdownState.taskTag} name="taskTag" onChange={handleChange}>
          <option key='noneOption' value={JSON.stringify({})}>None</option>
          {tags.map(tagToTagItem)}
        </select>
      </label>
      <div className='addTaskDropdown__button--container'>
        <button className='addTaskDropdown__button--add' type="reset" onClick={handleCloseDropdown}>Close</button>
        <button className='addTaskDropdown__button--close' type='submit'>Add task</button>
      </div>
    </form>
  )
}

export default AddTaskDropdown