import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ToDoList from './ToDoList'

window.id=0;
class App extends Component {

  render() {
    return (
      <div className = "container">
        <Header/>
        <ToDoList />
      </div>
        
    );
  }
}

export default App;
