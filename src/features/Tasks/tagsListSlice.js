import { createSlice } from '@reduxjs/toolkit'

export const tagsListSlice = createSlice({
    name: 'tasksList',
    initialState: [
        {
            name: "tag1",
            color: "#f00"
        },
        {
            name: "tag2",
            color: "#f0f"
        }
    ],
    reducers: {
        addTag: (state) => {
            state.push({
                name: "testTag",
                color: "#000"
            })
        },
        removeTag: (state, action) => {        
            const index = state.findIndex(item => item.itemKey === action.payload)
            state.splice(index,1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTag, removeTag} = tagsListSlice.actions

export default tagsListSlice.reducer