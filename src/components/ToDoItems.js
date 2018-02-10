import React, { Component } from 'react';

class ToDoItems extends Component {
    constructor(props, context) {
        super(props,context);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick = {() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var toDoEntries = this.props.entries;
        var listItems = toDoEntries.map(this.createTasks);

        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }  
};

export default ToDoItems;