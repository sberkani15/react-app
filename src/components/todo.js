import React, { Component } from 'react';

import TodosItem from './todoitem';


class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} markComplete={this.props.markComplete} onToDelete={this.props.onToDelete}/>
    ))
  }
}

export default Todos;
