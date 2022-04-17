import * as React from "react";
//import { useDispatch } from "react-redux";
//import { removeTag} from "./tagsListSlice";
import './TagItem.css'

export const TagItem = ({ name, color}) => {
  //const dispatch = useDispatch()
  
  return (
    <li className="tagItem">
      <div className="tagItem__circle" style={{backgroundColor: `${color}`}}></div>
      <p className="tagItem__name">{name}</p>
    </li>
  );
};