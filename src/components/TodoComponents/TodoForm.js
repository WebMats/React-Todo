import React from 'react';

import './Todo.css';


const todoForm = (props) => (
        <form className="TodoForm" onSubmit={props.submited} autoComplete="off">
                <input onChange={props.changed} name="newTodo" value={props.newTodo} />
                <button className="AddBtn" >Add Todo</button>
                <button className="ClrBtn" type="button" onClick={props.clearCompleted}>Clear Completed</button>
        </form>
)

export default todoForm;