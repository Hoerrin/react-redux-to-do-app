import React, { useState } from "react";
import { TagItem } from "./TagItem";
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from "../features/Tasks/tagsListSlice";
import './TagsList.css'


export function TagsList() {
    const tags = useSelector((state) => state.tagsList)
    const dispatch = useDispatch()

    const [nameInput, setNameInput] = useState(0);
    const [colorInput, setColorInput] = useState('red');

    const colors = ['red', 'orange', 'brown']

    const tagToTagItem = tag => {
        const {name,color} = tag;
        
        return <TagItem key={name} name={name} color={color} />
    };

    const handleAddTag = () => {
        let nameAndColor = {
            name: nameInput, 
            color: colorInput
        }

        if(tags.some((item) => item.name === nameInput)){
            console.log("This tag already exists!")
            return
        }
        
        dispatch(addTag(nameAndColor))
    }

    const availableColors = color => {
        return <option key={color} style={{ backgroundColor: `${color}` }}>{color}</option>
    }

    return (
        <>
            <button onClick={handleAddTag}>Add tag</button>
            <input type="text" value={nameInput.value} onChange={(e) => setNameInput(e.target.value)} />
            <select name="" id="" value={colorInput.value} onChange={(e) => setColorInput(e.target.value)}>
                {colors.map(availableColors)}
            </select>
            <ul className="tagsList">
                {tags.map(tagToTagItem)}
            </ul>
        </>

    );
}
