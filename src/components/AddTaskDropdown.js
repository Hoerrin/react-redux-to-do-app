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
  const [Warning, setWarning] = useState('');

  //Create new option for each tag in state
  const tagToTagItem = tag => {
    const { tagName, tagColor } = tag;

    return <option key={tagName} value={JSON.stringify({ tagName, tagColor })}>{tagName}</option>
  };

  const handleAddTask = () => {
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

    //If no task name provided show warning
    setWarning('Provide task name!')

    //Reset wrning after 2000ms
    setTimeout(() => {
      setWarning('')
    }, 2000);

  }

  const handleCloseDropdown = () => {
      setTaskNameInput('')
      setTaskDescrInput('')
      seTtaskTagInput(JSON.stringify({}))
      props.closeDropdown()
      return
  }

  return (
    <div className='addTaskDropdown addTaskDropdown--hidden'>
      <label className='addTaskDropdown__label' id='addTaskDropdown__addTaskInput'>Task name <input type="text" required="required" className='addTaskDropdown__input' maxLength={200} value={taskNameInput} onChange={(e) => setTaskNameInput(e.target.value)} /></label>
      <label className='addTaskDropdown__label'>Description <textarea type='textarea' placeholder='optional' className='addTaskDropdown__input addTaskDropdown__input--textarea' maxLength={500} value={taskDescrInput} onChange={(e) => setTaskDescrInput(e.target.value)} /></label>
      <label className='addTaskDropdown__label'>Tag <select name="taskTag" className='addTaskDropdown__input' value={taskTagInput} onChange={(e) => seTtaskTagInput(e.target.value)}>
        <option key='noneOption' value={JSON.stringify({})}>None</option>
        {tags.map(tagToTagItem)}
      </select></label>
      <div className='addTaskDropdown__button--container'>
        <button className='addTaskDropdown__button--add' onClick={handleCloseDropdown}>Close</button>
        <button className='addTaskDropdown__button--close' onClick={handleAddTask}>Add task</button>
      </div>
      <p className='addTaskDropdown__warning'>{Warning}</p>
    </div>
  )
}

export default AddTaskDropdown