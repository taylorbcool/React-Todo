import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    this.setState({
      todo: e.target.value
    });
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          value={this.state.todo}
          type="text"
          name="To-do:"
        />
        <button type="submit">Add To-do</button>
      </form>
    );
  }
}

export default TodoForm;
