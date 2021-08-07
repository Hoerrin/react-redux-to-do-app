import { configureStore } from '@reduxjs/toolkit'
import tasksListReducer from './features/Tasks/tasksListSlice'

export default configureStore({
    reducer: {
        tasksList: tasksListReducer,
      },
})