import React from 'react';
import ToDoListItem from './todo_list_item'
import TodoForm from './todo_form'

class TodoList extends React.Component {
    constructor(props){
        super(props);

    };

    render(){
        const {todos, receiveTodo, removeTodo} = this.props;

        return(
            <div>
                <TodoForm receiveTodo={receiveTodo} />
                <ul>
                    {todos.map((todo) => (
                        <ToDoListItem 
                            id={todo.id} 
                            title={todo.title}
                            receiveTodo={receiveTodo}
                            removeTodo={removeTodo}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        )
    }
};

export default TodoList;