import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfItems = () => {
        if(item !== ""){
            setNewItem((prevState) => {
                return [...prevState, item];
            });
            setItem("");
        }
    };

    const deleteItem = (id) => {
        console.log("del "+id)
        const newList = newItem.filter((arr, index) => index !== id);
        setNewItem(newList);
    };

    const editItem = (id) => {
        console.log("edit " +id);
        const editTask = prompt("Edit task - ");
        if (editTask === null) {
            return;
        }
        console.log(editTask);
        const newtask = [...newItem];
        console.log(newtask);
        newtask[id] = editTask;
        console.log(newtask);
        setNewItem(newtask);
    };


    return (
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input
                        type="text"
                        value={item}
                        placeholder="Add Task"
                        onChange={itemEvent}
                    />
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {newItem.map((val, index) => {
                            return <ListCom 
                            key= {index} 
                            id= {index}
                            text= {val} 
                            onDel= {deleteItem}
                            onEd= {editItem}
                            />;
                        })}
                    </ol>
                    <br />
                </div>
            </div>
        
    );
};
export default ToDoList;
