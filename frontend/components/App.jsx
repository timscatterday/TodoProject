import React from 'react';
import TodoListContainer from '../components/todos/todo_list_container';
import './app.css';

const App = () => (
    <div className='App'>
        <h1 className='title'>TODO App</h1>
        <TodoListContainer />
    </div>
);

export default App;