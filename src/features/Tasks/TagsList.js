import * as React from "react";
import { TagItem } from "./TagItem";
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from "./tagsListSlice";
import './TagsList.css'


export function TagsList() {
    const tags = useSelector((state) => state.tagsList)
    const dispatch = useDispatch()
    
    const tagToTaskItem = task => {
        const name = task.name;
        const color = task.color;
        return <TagItem name={name} color={color}/>
    };

    return (
        <>
            <button onClick={() => dispatch(addTag())}>Add tag</button>
            <ul className="tagList">
                {tags.map(tagToTaskItem)}
            </ul>
        </>

    );
}
