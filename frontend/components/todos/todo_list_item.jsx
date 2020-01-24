import React from 'react';

class ToDoListItem extends React.Component {
    constructor(props){
        super(props)

        this.toggleTodo = this.toggleTodo.bind(this);
    };

    toggleTodo(e){
        e.preventDefault();
        const toggledTodo = Object.assign(
            {},
            this.props.todo,
            { done: !this.props.todo.done }
        );

        this.props.receiveTodo(toggledTodo);
    };


    render(){
        const {id , removeTodo, todo, receiveTodo} = this.props;
        const {done, title} = todo;

        return(
            <div className='TodoItem'>
                <li key={id}>{title}</li>
                <div>
                    <button onClick={this.toggleTodo}>{done ? "Undo" : "Done"}</button>
                    <button onClick={() => removeTodo(todo)}>Delete</button>
                </div>
            </div>
        )
    }
};

export default ToDoListItem;