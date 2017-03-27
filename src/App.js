import React, { Component } from 'react';
import TodoListing from './TodoListing';
import TodoForm from './TodoForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  addTodo = (todo) => {
    this.setState({
      todos: this.state.todos.concat({ content: todo })
    });
  }

  removeTodo = (content) => {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.content !== content
    });

    this.setState({
      todos: newTodos 
    })
  }

  render() {
    return (
      <div>
        <TodoListing 
          todos={ this.state.todos }
          removeTodo={ this.removeTodo }
        />
        <TodoForm
          addTodo={ this.addTodo }
        />
      </div>
    );
  }
}

export default App;
