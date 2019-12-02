import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

const todoList = [
  {
    id: 1,
    name: 'finish app',
    completed: false,
  },
  {
    id: 2,
    name: 'learn to juggle',
    completed: true,
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
      id: Date.now(),
      name: newTodoText,
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

  render() {
    return (
      <div className='container'>
        <h2>Welcome to my Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
