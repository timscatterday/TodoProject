import React from 'react';

class ToDoListItem extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        const {id, title} = this.props

        return(
            <li key={id}>{title}</li>
        )
    }
};

export default ToDoListItem;