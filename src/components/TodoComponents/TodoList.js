// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';


const todoList = ({todos}) => todos.map(todo => <Todo key={todo.id}>{todo.task}</Todo>);

export default todoList;