import { createSlice } from '@reduxjs/toolkit'

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState: [
        {
            title: "title",
            description: "description",
            id: "test256",
            completed: false,
            tag: "Work",
            tagColor: "#f00"
        },
        {
            title: "title2",
            description: "description",
            id: "test255",
            completed: false,
            tag: "Work",
            tagColor: "#f00"
        }
    ],
    reducers: {
        addTask: (state) => {
            state.push({
                title: "test",
                description: "test",
                id: "test" + Math.floor(Math.random() * 1000),
                completed: false,
                tag: "test",
                tagColor: "#0f0"
            })
        },
        removeTask: (state, action) => {        
            const index = state.findIndex(item => item.id === action.payload)
            state.splice(index,1)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = tasksListSlice.actions

export default tasksListSlice.reducer