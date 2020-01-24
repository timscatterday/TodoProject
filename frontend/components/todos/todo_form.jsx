import React from 'react';
import {uniqueId} from '../../util/uniq'

class TodoForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: "",
            body: "",
            done: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(property){
        return e => this.setState({[property]: e.target.value})
    };


    handleSubmit(e){
        e.preventDefault();

        const todo = Object.assign({}, this.state, {id: uniqueId()});

        this.props.receiveTodo(todo);

        this.setState({
            title: "",
            body: ""
        });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className='Form'>
                    <label className='label'>
                        Title:
                        <input 
                            className='input'
                            ref='title'
                            value={this.state.title}
                            placeholder="Buy Milk"
                            onChange={this.update('title')}
                        />
                    </label>
                    <label className='label'>
                        Body:
                        <textarea
                            className='input'
                            ref='body'
                            rows='5'
                            cols='20'
                            value={this.state.body}
                            placeholder="2% milk"
                            onChange={this.update('body')}
                        />
                    </label>
                    <button className="create-button">Create Todo!</button>
                </form>
            </div>
        )
    }
};

export default TodoForm;