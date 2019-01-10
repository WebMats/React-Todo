import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';


class App extends React.Component {
  state = {
    todos: [
      { task: 'Read for one hour', id: 1528817077286, completed: false},
      { task: 'Go to gym for 45 min', id: 1528817084358, completed: false},
      { task: 'Complete code challenge', id: 1528819581058, completed: false}
    ],
    newTodo: ''
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      if (prevState.todos.find(todo => todo.task === prevState.newTodo)) return;

      const newTask = { task: prevState.newTodo, id: Date.now(), completed: false }
      return { todos: [...prevState.todos, newTask], newTodo: '' }
    })
  }

  setCompleteHandler = (id) => {
    this.setState(prevState => {
      const copiedTasks = [...prevState.todos];
      (copiedTasks.find(cptsk => cptsk.id === id)).completed = true;
      return({todos: copiedTasks})
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} setComplete={this.setCompleteHandler} />
        <TodoForm 
          submited={this.submitFormHandler} 
          changed={(e) => {this.setState({newTodo: e.target.value})}} 
          newTodo={this.state.newTodo} 
        />
      </div>
    );
  }
}

export default App;