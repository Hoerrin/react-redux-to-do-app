import { createSlice } from '@reduxjs/toolkit'

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState: [
        {
            title: "title",
            description: "description"
        },
        {
            title: "title2",
            description: "description"
        }
    ],
    reducers: {
        addTask: (state) => {
            state += 1
        },
        removeTask: (state, action) => {
            state += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = tasksListSlice.actions

export default tasksListSlice.reducer