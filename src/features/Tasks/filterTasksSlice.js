import { createSlice } from '@reduxjs/toolkit'

export const filterTasksSlice = createSlice({
    name: 'tagsList',
    initialState:
    {
        activeFilter: "NONE",
        showCompleted: false,
        selectedTag: 'tagTestowy'
    },
    reducers: {
        changeFilter: (state, action) => {

        },
        changeShowCompleted: (state) => {
            state.showCompleted = !state.showCompleted
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeFilter, changeShowCompleted } = filterTasksSlice.actions

export default filterTasksSlice.reducer