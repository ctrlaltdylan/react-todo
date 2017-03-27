import React, { Component, PropTypes } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
        { this.props.content }
        <button onClick={() => { this.props.removeTodo(this.props.content) } }>
          X
        </button>
      </li>
    )
  }
}

Todo.propTypes = {
  content: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default Todo;