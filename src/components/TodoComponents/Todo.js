import React from 'react';

import './Todo.css';


const todo = (props) => <p 
                            onClick={props.clicked} 
                            style={ props.completed ? {textDecoration: 'line-through'} : null} 
                            className="Todo"
                        >{props.children}</p>

export default todo;