import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

class TodoListing extends Component {
  renderTodo = (todo, index) => {
    return (
      <Todo 
        key={index} 
        content={todo.content} 
        removeTodo={this.props.removeTodo}
      />
    )
  }

  render() {
    return (
      <ul>
        { this.props.todos.map(this.renderTodo) }
      </ul>
    )
  }
}

TodoListing.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default TodoListing;