import { createSlice } from '@reduxjs/toolkit'

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState: [
    //Test use only 
        /*{
            title: "title",
            description: "description",
            taskKey: "test25356",
            completed: false,
            tag: {
                //tagName: "tag",
                //tagColor: "#f00"
            }
        },
        {
            title: "title2",
            description: "description",
            taskKey: "test25125",
            completed: true,
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
                completed: false,
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
        clickTaskCheckbox: (state, action) => {
            const index = state.findIndex(item => item.taskKey === action.payload)
            state[index].completed = !state[index].completed
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, addTagToTask, removeTagFromTask, removeTask, clickTaskCheckbox } = tasksListSlice.actions

export default tasksListSlice.reducer