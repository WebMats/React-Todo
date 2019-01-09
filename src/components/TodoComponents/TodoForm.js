import React from 'react';

const todoForm = (props) => (
        <form>
                <input className="Input" name="newTodo" value={props.newTodo} />
                <button className="AddBtn" >Add Todo</button>
                <button className="ClrBtn" type="button">Clear Completed</button>
        </form>
)

export default todoForm;