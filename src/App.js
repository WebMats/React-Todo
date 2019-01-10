import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchComponent from './components/SearchComponent/SearchComponent';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    let persistedTodos = JSON.parse(localStorage.getItem('todos'));
    this.state = {
      todos: persistedTodos !== null ? persistedTodos : [
        { task: 'Read for one hour', id: 1528817077286, completed: false},
        { task: 'Go to gym for 45 min', id: 1528817084358, completed: false},
        { task: 'Complete code challenge', id: 1528819581058, completed: false}
      ],
      newTodo: '',
      searchedTodos: []
    }
  }

  saveTodosInLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      if (prevState.todos.find(todo => todo.task === prevState.newTodo) || prevState.newTodo === '') return;

      const newTask = { task: prevState.newTodo, id: Date.now(), completed: false }
      return { todos: [...prevState.todos, newTask], newTodo: '' }
    }, this.saveTodosInLocalStorage)
  }

  setCompleteHandler = (id) => {
    this.setState(prevState => {
      const copiedTasks = [...prevState.todos];
      (copiedTasks.find(cptsk => cptsk.id === id)).completed = true;
      return({todos: copiedTasks})
    })
  }
  searchedTodosHandler = (e) => {
    e.persist();
    if (e.target.value.length === 0) {
      return { searchedTodos: [] }
    }
    this.setState(prevState => {
      return { searchedTodos: prevState.todos.filter(todo => todo.task.toLowerCase().includes(e.target.value.toLowerCase())) }
    })
  }

  render() {
    console.log(this.state.searchedTodos)
    return (
      <div className="App">
        <TodoList todos={this.state.todos} setComplete={this.setCompleteHandler} />
        <TodoForm
          clearCompleted={() => this.setState(prevState => ({ todos:prevState.todos.filter(todo => todo.completed === false) }),this.saveTodosInLocalStorage)} 
          submited={this.submitFormHandler} 
          changed={(e) => {this.setState({newTodo: e.target.value})}} 
          newTodo={this.state.newTodo} 
        />
        <SearchComponent todos={this.state.searchedTodos} searchTodos={this.searchedTodosHandler}/>
      </div>
    );
  }
}

export default App;