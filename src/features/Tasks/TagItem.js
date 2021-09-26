import * as React from "react";
import { useDispatch } from "react-redux";
import { removeTag} from "./tagsListSlice";
import './TagItem.css'

export const TagItem = ({ name, color}) => {
  const dispatch = useDispatch()
  
  return (
    <li className="tag">
      <p className="tag__name">{name}</p>
      <div className="tag__dot"></div>
    </li>
  );
};