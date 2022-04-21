import React, { useState } from "react";
import { TagItem } from "./TagItem";
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from "../features/Tasks/tagsListSlice";
import './TagsList.css'


export function TagsList() {
    const tags = useSelector((state) => state.tagsList)
    const dispatch = useDispatch()

    //States for tag name and color inputs
    const [nameInput, setNameInput] = useState(0);
    const [colorInput, setColorInput] = useState('red');

    //
    //
    //Available colors for tags
    const availableColors = ['red', 'orange', 'brown']
    //
    //
    //

    //Create new instance of component for each tag in state
    const tagToTagItem = tag => {
        const { tagName, tagColor } = tag;

        return <TagItem key={tagName} tagName={tagName} tagColor={tagColor} />
    };

    const handleAddTag = () => {
        let nameAndColor = {
            tagName: nameInput,
            tagColor: colorInput
        }

        //Check if tag with this name already exists and return if there is one
        if (tags.some((item) => item.tagName === nameInput)) {
            console.log("This tag already exists!")
            return
        }

        //Add tag with provided name and color
        dispatch(addTag(nameAndColor))
    }

    //Return new option for each color in available colors ^
    const colorOptions = color => {
        return <option key={color} style={{ backgroundColor: `${color}` }}>{color}</option>
    }

    return (
        <>
            <button onClick={handleAddTag}>Add tag</button>
            <input type="text" value={nameInput.value} onChange={(e) => setNameInput(e.target.value)} />
            <select name="" id="" value={colorInput.value} onChange={(e) => setColorInput(e.target.value)}>
                {availableColors.map(colorOptions)}
            </select>
            <ul className="tagsList">
                {tags.map(tagToTagItem)}
            </ul>
        </>

    );
}
