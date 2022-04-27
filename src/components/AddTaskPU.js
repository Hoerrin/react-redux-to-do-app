import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/Tasks/tasksListSlice'
import './AddTaskPU.css'

function AddTaskPU() {
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
    }
    
    //If no task name provided show warning
    setWarning('Provide task name!')

    //Reset wrning after 3000ms
    setTimeout(() => {
      setWarning('')
    }, 3000);
    
  }

  return (
    <div className='addTaskPU__container'>
      <label>Task name <input type="text" required="required"  value={taskNameInput} onChange={(e) => setTaskNameInput(e.target.value)} /></label>
      <label>Description <input type="text" placeholder='optional' value={taskDescrInput} onChange={(e) => setTaskDescrInput(e.target.value)} /></label>
      <label>Tag <select name="taskTag" id="taskTag" value={taskTagInput} onChange={(e) => seTtaskTagInput(e.target.value)}>
      <option key='noneOption' value={JSON.stringify({})}>None</option>
        {tags.map(tagToTagItem)}
      </select></label>
      <button onClick={handleAddTask}>Add task</button>
      <p className='addTaskPU__warning'>{Warning}</p>
    </div>
  )
}

export default AddTaskPU