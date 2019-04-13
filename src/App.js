import React, { Component } from 'react';
import './App.css';

import Todo from './components/todo';

class App extends Component {
  state = {
      todos : [
        {
          id: 1,
          title: 'todo 1',
          done: false
        },
        {
          id: 2,
          title: 'todo 2',
          done: true
        },
        {
          id: 3,
          title: 'todo 3',
          done: false
        }
      ]
    }

markComplete = (id) => {
  this.setState ({toto: this.state.todos.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  })})
}
onToDelete = (id) => {
  this.setState ({todos: [...this.state.todos.filter(todo => 
  todo.id !== id)]})

}

  render() {

    return (
      <div className="App">
       <Todo todos = {this.state.todos} markComplete={this.markComplete} onToDelete={this.onToDelete}/>
      </div>
    );
  }
}

export default App;
