import { createSlice } from '@reduxjs/toolkit'

export const tagsListSlice = createSlice({
    name: 'tagsList',
    initialState: [
        {
            itemKey: "tag1",
            tagName: "tag1",
            tagColor: "#f00"
        },
        {
            itemKey: "tag2",
            tagName: "tag2",
            tagColor: "#f0f"
        }
    ],
    reducers: {
        addTag: (state, action) => {
            if (!action.payload.tagName) {
                console.log("Please provide tag name!")
                return
            }

            if (state.some((item) => item.tagName === action.payload.tagName)) {
                return
            }

            if (action.payload.tagColor) {
                state.push({
                    itemKey: action.payload.tagName,
                    tagName: action.payload.tagName,
                    tagColor: action.payload.tagColor
                })
            }
        },
        removeTag: (state, action) => {
            const index = state.findIndex(item => item.itemKey === action.payload)
            state.splice(index, 1)
        }
    },
})


// Action creators are generated for each case reducer function
export const { addTag, removeTag } = tagsListSlice.actions

export default tagsListSlice.reducer