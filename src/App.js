import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoList = [
  {
    id: 1,
    todo: 'Take medicine',
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoList,

    }
  }

  addTodo = newTodoText => {
    const newTodo = {
      todo: newTodoText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
