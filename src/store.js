import { configureStore } from '@reduxjs/toolkit'
import tasksListReducer from './features/Tasks/tasksListSlice'
import tagsListReducer from './features/Tasks/tagsListSlice'
import filterTasksReducer from './features/Tasks/filterTasksSlice'

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load data from localStarage and convert into an Object
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    tasksList: tasksListReducer,
    tagsList: tagsListReducer,
    filterTasks: filterTasksReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store 