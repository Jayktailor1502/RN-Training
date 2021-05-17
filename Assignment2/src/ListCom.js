import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ListCom = (props) => {
    return (
    
        <div className="todo_style">
            <li>
                <ArrowRightIcon />
                {props.text}
                
                <button className="btn" type="button" onClick={() => {props.onDel(props.id);}}>
                    <DeleteIcon className="ToIcon"/>
                </button>
                <button className="btn" type="button" onClick={() => {props.onEd(props.id);}}>
                    <EditIcon className="ToIcon"/>
                </button>
               
            </li>
        </div>

    );
};
export default ListCom;

//  {/* <span  onClick={() => {props.onDel(props.id);}}> <DeleteIcon className="ToIcon" /> </span>
//  <span  onClick={() => {props.onEd(props.id);}}>  <EditIcon className="ToIcon" />   </span>  */}