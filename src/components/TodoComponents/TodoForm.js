import React from 'react';

import './TodoComponents.css';


const todoForm = (props) => (
        <form className="TodoForm" onSubmit={props.submited} autoComplete="off">
                <input onChange={props.changed} className="Input" name="newTodo" value={props.newTodo} />
                <button className="AddBtn" >Add Todo</button>
                <button className="ClrBtn" type="button">Clear Completed</button>
        </form>
)

export default todoForm;