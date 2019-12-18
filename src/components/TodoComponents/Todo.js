import React from "react";

const Todo = props => {

    const handleClick = () => {
        // console.log(props.todo.completed);
        props.todo.completed = !props.todo.completed;
        
        if(document.getElementById(props.todo.id).classList.contains('completed')){
            document.getElementById(props.todo.id).classList.remove('completed')
        } else {
            document.getElementById(props.todo.id).classList.add('completed')
        }
    }

    return (
        <div onClick={handleClick} className={`todo${props.todo.completed ? " completed" : ""}`} id={props.todo.id}>
        <p>{props.todo.name}</p>
        </div>
    );
}
export default Todo;