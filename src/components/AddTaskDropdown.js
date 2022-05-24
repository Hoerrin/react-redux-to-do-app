import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/Tasks/tasksListSlice'
import './AddTaskDropdown.css'

function AddTaskDropdown(props) {
  const tags = useSelector((state) => state.tagsList)
  const dispatch = useDispatch()

  //States for tag name and color inputs
  const [taskNameInput, setTaskNameInput] = useState('');
  const [taskDescrInput, setTaskDescrInput] = useState('');
  const [taskTagInput, seTtaskTagInput] = useState(JSON.stringify({}));

  //Create new option for each tag in state
  const tagToTagItem = tag => {
    const { tagName, tagColor } = tag;

    return <option key={tagName} value={JSON.stringify({ tagName, tagColor })}>{tagName}</option>
  };

  const handleAddTask = (e) => {
    e.preventDefault()
    const taskTitle = taskNameInput;
    const taskDescription = taskDescrInput;
    const taskTag = taskTagInput;

    if (taskTitle) {
      dispatch(addTask({ taskTitle, taskDescription, taskTag }))
      setTaskNameInput('')
      setTaskDescrInput('')
      seTtaskTagInput(JSON.stringify({}))
      props.closeDropdown()
      return
    }
  }

  const handleCloseDropdown = () => {
    setTaskNameInput('')
    setTaskDescrInput('')
    seTtaskTagInput(JSON.stringify({}))
    props.closeDropdown()
    return
  }

  return (
    <form className='addTaskDropdown addTaskDropdown--hidden' onSubmit={handleAddTask}>
      <label className='addTaskDropdown__label' id='addTaskDropdown__addTaskInput'>Task name <input type="text" required className='addTaskDropdown__input' maxLength={150} value={taskNameInput} onChange={(e) => setTaskNameInput(e.target.value)} /></label>
      <label className='addTaskDropdown__label'>Description <textarea type='textarea' placeholder='optional' className='addTaskDropdown__input addTaskDropdown__input--textarea' maxLength={300} value={taskDescrInput} onChange={(e) => setTaskDescrInput(e.target.value)} /></label>
      <label className='addTaskDropdown__label'>
        Tag
        <select name="taskTag" className='addTaskDropdown__input addTaskDropdown__input--select' value={taskTagInput} onChange={(e) => seTtaskTagInput(e.target.value)}>
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