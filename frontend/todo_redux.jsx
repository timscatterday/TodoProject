import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {allTodos} from './reducers/selectors'
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore;
    window.store = store;
    window.allTodos = allTodos;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});