import { createSlice } from '@reduxjs/toolkit'

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState: [
        {
            title: "title",
            description: "description",
            taskKey: "test25356",
            completed: false,
            tag: {
                name: "tag",
                color: "#f00"
            }
        },
        {
            title: "title2",
            description: "description",
            taskKey: "test25125",
            completed: true,
            tag: {
                //name: "tag",
                //color: "#f00"
            }
        }
    ],
    reducers: {
        addTask: (state) => {
            state.push({
                title: "test",
                description: "test",
                taskKey: "test" + Math.floor(Math.random() * 100000),
                completed: false,
                tag: {
                    //name: "testTag",
                    //color: "#0f0"
                }
            })
        },
        addTagToTask: (state, action) => {        
            const index = state.findIndex(item => item.taskKey === action.payload.itemIndex)
            state[index].tag = action.payload.tag
            
        },
        removeTask: (state, action) => {        
            const index = state.findIndex(item => item.taskKey === action.payload)
            state.splice(index,1)
        },
        clickTaskCheckbox: (state, action) => {        
            const index = state.findIndex(item => item.taskKey === action.payload)
            state[index].completed = !state[index].completed 
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, addTagToTask, removeTask, clickTaskCheckbox} = tasksListSlice.actions

export default tasksListSlice.reducer