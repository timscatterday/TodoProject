import React from 'react';
import {uniqueId} from '../../util/uniq'

class TodoForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: "",
            body: "",
            newTag: "",
            tags: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTag = this.addTag.bind(this);
    };

    update(property){
        return e => this.setState({[property]: e.target.value})
    };

    addTag(e){
        this.setState({
           tags: [...this.state.tags, this.state.newTag],
           newTag: ""
        });
    };

    handleSubmit(e){
        e.preventDefault();

        const {title, body} = this.state;

        this.props.receiveTodo({id: uniqueId(), title: title, body: body});
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
                    <label className='label'>
                        Tag:
                        <input
                            className='input'
                            ref='body'
                            value={this.state.newTag}
                            placeholder="Enter a new tag"
                            onChange={this.update('newTag')}
                        />
                        <button type="button" className="button" onClick={this.addTag}>
                            Add Tag
                        </button>
                    </label>
                    <button className="create-button">Create Todo!</button>
                </form>
            </div>
        )
    }
};

export default TodoForm;