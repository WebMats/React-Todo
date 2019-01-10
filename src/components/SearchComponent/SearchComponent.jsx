import React from 'react';

import TodoList from '../TodoComponents/TodoList';

import './SearchComponent.css';


const searchComponent = (props) => {

        return (
            <React.Fragment>
                <form className="SearchForm" autoComplete="off">
                    <input name="Search" onChange={props.searchTodos} />
                </form>
                <TodoList todos={props.todos} />
            </React.Fragment>
        )
}

export default searchComponent;