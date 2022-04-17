import { createSlice } from '@reduxjs/toolkit'

export const tagsListSlice = createSlice({
    name: 'tagsList',
    initialState: [
        {
            itemKey: "tag1",
            name: "tag1",
            color: "#f00"
        },
        {
            itemKey: "tag2",
            name: "tag2",
            color: "#f0f"
        }
    ],
    reducers: {
        addTag: (state, action) => {
            console.log(action.payload)
            state.push({
                itemKey: action.payload.name,
                name: action.payload.name,
                color: action.payload.color
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