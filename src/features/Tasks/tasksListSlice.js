import { createSlice } from '@reduxjs/toolkit'

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState: [
    //Test use only 
        /*{
            title: "title",
            description: "description",
            taskKey: "test25356",
            isCompleted: false,
            isEdited: false,
            tag: {
                //tagName: "tag",
                //tagColor: "#f00"
            }
        },
        {
            title: "title2",
            description: "description",
            taskKey: "test25125",
            isCompleted: true,
            isEdited: false,
            tag: {
                //tagName: "tag",
                //tagColor: "#f00"
            }
        }*/
    ],
    reducers: {
        addTask: (state, action) => {
            state.push({
                title: action.payload.taskTitle,
                description: action.payload.taskDescription,
                taskKey: action.payload.taskTitle + Math.floor(Math.random() * 10000),
                isCompleted: false,
                isEdited: false,
                tag: JSON.parse(action.payload.taskTag)
            })
        },
        addTagToTask: (state, action) => {
            const index = state.findIndex(item => item.taskKey === action.payload.taskKey)
            state[index].tag = action.payload.tag
        },
        removeTagFromTask: (state, action) => {
            const index = state.findIndex(item => item.taskKey === action.payload)
            state[index].tag = {}
        },
        removeTask: (state, action) => {
            const index = state.findIndex(item => item.taskKey === action.payload)
            state.splice(index, 1)
        },
        completeTask: (state, action) => {
            const index = state.findIndex(item => item.taskKey === action.payload)
            state[index].isCompleted = !state[index].isCompleted
        },
        toggleEditTask: (state, action) => {
            const index = state.findIndex(item => item.taskKey === action.payload)
            state[index].isEdited = !state[index].isEdited
        },
        editTask: (state, action) => {
            const index = state.findIndex(item => item.taskKey === action.payload)
            state[index].isEdited = true
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, addTagToTask, removeTagFromTask, removeTask, completeTask, toggleEditTask, editTask } = tasksListSlice.actions

export default tasksListSlice.reducer