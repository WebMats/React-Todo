// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';


const todoList = ({todos, ...props}) => todos.map(todo => <Todo 
                                                    completed={todo.completed} 
                                                    clicked={() => props.setComplete(todo.id)} 
                                                    key={todo.id}
                                                >{todo.task}</Todo>);

export default todoList;