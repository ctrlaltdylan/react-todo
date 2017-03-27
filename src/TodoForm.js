import React, { Component, PropTypes } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  onContentChange = (e) => {
    this.setState({ content: e.target.value });
  }

  addTodo = () => {
    this.props.addTodo(this.state.content);
    this.setState({ 
      content: '' 
    });
  }

  render() {
    return (
      <div>
        <textarea value={this.state.content} onChange={this.onContentChange}></textarea>
        <button onClick={this.addTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

TodoForm.propType = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
}

export default TodoForm;