import { configureStore } from '@reduxjs/toolkit'
import tasksListReducer from './features/Tasks/tasksListSlice'
import tagsListReducer from './features/Tasks/tagsListSlice'

export default configureStore({
    reducer: {
        tasksList: tasksListReducer,
        tagsList: tagsListReducer
      },
})