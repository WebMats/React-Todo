import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
      if (prevState.todos.find(todo => todo.task === prevState.newTodo)) {
        return;
      }
      const newTask = {task: prevState.newTodo, id: new Date().valueOf(), completed: false}
      return {todos: [...prevState.todos, newTask], newTodo: ''}
    })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <TodoList todos={this.state.todos} />
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
