// useReducer hook uses the same approach as Redux.
// It allows you to create mechanism with actions dispatching to reducer for complex state manipulations

import React, { useEffect, useReducer, useRef } from 'react';

// reducer

function reducer(todoState, action) {
    switch (action.type) {
        case ACTION.ADD_TODO: {
            return [...todoState, action.payload];
        }
        case ACTION.TOGGLE_TODO: {
            const index = todoState.findIndex(todo => todo.id === action.payload.id);
            const newState = Array(...todoState);
            newState[index].isComplete = action.payload.isComplete;
            return newState;
        }
        case ACTION.DELETE_TODO: {
            return todoState.filter(todo => todo.id !== action.payload);
        }
        default:
            return todoState;
    }
};

// action types and defaults

const ACTION = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
};

const defaultState = [];

// action creators

const addToDo = (name) => ({ type: ACTION.ADD_TODO, payload: { id: name + Date.now(), name: name, isComplete: false } });
const toggleToDo = ({ id, isComplete }) => ({ type: ACTION.TOGGLE_TODO, payload: { id: id, isComplete: !isComplete } });
const deleteToDo = (id) => ({ type: ACTION.DELETE_TODO, payload: id });



function UseReducerExample() {
    const [todo, dispatch] = useReducer(reducer, defaultState);
    const inputRef = useRef(null);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(inputRef.current.value));
        inputRef.current.value = '';
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type='text' ref={inputRef}/>
            </form>
            <Todo todo={todo} dispatch={dispatch}/>
        </div>
    );
};

function Todo({ todo, dispatch }) {
    return (
        <ul>
            {todo.map(todoItem => (
                <li key={todoItem.id}>
                    <p style={ { color: todoItem.isComplete ? 'gray' : 'black' }}>{todoItem.name}</p>
                    <button onClick={() => dispatch(toggleToDo(todoItem))}>Toggle</button>
                    <button onClick={() => dispatch(deleteToDo(todoItem.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};


export default UseReducerExample;