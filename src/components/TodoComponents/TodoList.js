import React from "react";
import Todo from "./Todo";

const TodoList = props => {
// console.log(props)
    return (
        <div className="todo-list">
            <h3>To-do List:</h3>
        {props.todoList.map(todo => (
            <Todo key={todo.id} todo={todo} />
        ))}
        <button className="clear-btn" onClick={props.clearCompleted}>
            Clear Completed
        </button>
        </div>
    );
}
export default TodoList;
