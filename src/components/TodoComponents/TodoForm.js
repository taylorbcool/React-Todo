import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({
      newTodo: e.target.value
    });
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.newTodo}
          type="text"
          name="todo"
        />
        <button type="submit">Add To-do</button>
      </form>
    );
  }
}

export default TodoForm;
