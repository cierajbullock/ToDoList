import React, { Component } from "react";
import ToDoItems from './components/ToDoItems';
 
class ToDoList extends Component {
    constructor() {
        super();

        this.state = {
            toDoList: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(input) {
        var items = this.state.toDoList;
        if (this._inputElement.value !== "") {
            items.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
        this.setState({
            toDoList: items
        });

        this._inputElement.value = "";
    }
        console.log(items)
        input.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.toDoList.filter(function(item){
            return (item.key !== key);
        })

        this.setState({
            toDoList: filteredItems
        })
    }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit = {this.addItem}>
            <input ref ={(a) => this._inputElement = a} placeholder="Enter Task Here">
            </input>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <ToDoItems entries = {this.state.toDoList}
                   delete = {this.deleteItem}/>
      </div>
    );
  }
}
 
export default ToDoList;