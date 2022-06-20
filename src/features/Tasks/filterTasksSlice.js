import { createSlice } from '@reduxjs/toolkit'

export const filterTasksSlice = createSlice({
    name: 'tagsList',
    initialState:
    {
        activeFilter: 'NONE',
        showCompleted: false,
        selectedTag: ''
    },
    reducers: {
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        changeSelectedTag: (state, action) => {
            state.selectedTag = action.payload
        },
        changeShowCompleted: (state) => {
            state.showCompleted = !state.showCompleted
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeActiveFilter, changeSelectedTag, changeShowCompleted } = filterTasksSlice.actions

export default filterTasksSlice.reducer