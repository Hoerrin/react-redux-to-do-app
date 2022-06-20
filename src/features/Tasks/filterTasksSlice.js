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
        setFilterNone: (state) => {
            state.activeFilter = "NONE"
        },
        setFilterTag: (state) => {
            state.activeFilter = "TAG"
        },
        changeSelectedTag: (state, action) => {
            state.selectedTag = action.payload
        },
        clearSelectedTag: (state) => {
            state.selectedTag = ''
        },
        changeShowCompleted: (state) => {
            state.showCompleted = !state.showCompleted
        }
    },
})

// Action creators are generated for each case reducer function
export const { setFilterNone, setFilterTag, changeSelectedTag, clearSelectedTag, changeShowCompleted } = filterTasksSlice.actions

export default filterTasksSlice.reducer