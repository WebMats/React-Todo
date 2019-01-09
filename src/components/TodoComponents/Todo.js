import React from 'react';

import './TodoComponents.css';


const todo = (props) => {

        return(
                <p className="Todo">{props.children}</p>
        )
}

export default todo;