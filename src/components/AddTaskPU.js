import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/Tasks/tasksListSlice'
import './AddTaskPU.css'

function AddTaskPU(props) {
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
    
    return <option key={tagName} value={JSON.stringify({tagName, tagColor})}>{tagName}</option>
  };

  const handleAddTask = () => {
    const taskTitle = taskNameInput;
    const taskDescription = taskDescrInput;
    const taskTag = taskTagInput;

    if (taskTitle){
      dispatch(addTask({ taskTitle, taskDescription, taskTag }))
      props.switchPopUp()
      return
    }
    
    //If no task name provided show warning
    setWarning('Provide task name!')

    //Reset wrning after 2000ms
    setTimeout(() => {
      setWarning('')
    }, 2000);
    
  }

  return (
    <div className='addTaskPU addTaskPU--hidden'>
      <label className='addTaskPU__label'>Task name <input type="text" required="required" className='addTaskPU__input' maxLength={200} value={taskNameInput} onChange={(e) => setTaskNameInput(e.target.value)} /></label>
      <label className='addTaskPU__label'>Description <textarea type='textarea' placeholder='optional' className='addTaskPU__input addTaskPU__input--textarea' maxLength={500} value={taskDescrInput} onChange={(e) => setTaskDescrInput(e.target.value)} /></label>
      <label className='addTaskPU__label'>Tag <select name="taskTag" className='addTaskPU__input' value={taskTagInput} onChange={(e) => seTtaskTagInput(e.target.value)}>
      <option key='noneOption' value={JSON.stringify({})}>None</option>
        {tags.map(tagToTagItem)}
      </select></label>
      <button className='addTaskPU__button' onClick={handleAddTask}>Add task</button>
      <p className='addTaskPU__warning'>{Warning}</p>
    </div>
  )
}

export default AddTaskPU