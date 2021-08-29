import { createSlice } from '@reduxjs/toolkit'

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState: [
        {
            title: "title",
            description: "description",
            tag: "Work",
            tagColor: "#f00"
        },
        {
            title: "title2",
            description: "description",
            tag: "Work",
            tagColor: "#f00"
        }
    ],
    reducers: {
        addTask: (state) => {
            state.push({
                title: "test",
                description: "test",
                tag: "test",
                tagColor: "#0f0"
            })
        },
        removeTask: (state, action) => {
            state += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = tasksListSlice.actions

export default tasksListSlice.reducer