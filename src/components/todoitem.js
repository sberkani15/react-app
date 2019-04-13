import React, { Component } from 'react';


class TodosItem extends Component {
getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        border: '1px #ccc dotted',
        textDecoration: this.props.todo.done ? 'line-through' : 'none'
}
}

  render() {
    return (
        <div style={this.getStyle()}>
          <input type="checkbox"  onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> 
            {this.props.todo.title}
            <button style={this.buttonStyle()} onClick={this.props.onToDelete.bind(this, this.props.todo.id)}>x</button>
        </div>
    )
        
  }

buttonStyle = () => {
    return {
        background: 'red',
        borderRadius: '50%',
        color: '#fff',
        cursor: 'pointer',
        float: 'right',
        border: 'none',
        padding: '5px 9px'
    }
}


}

export default TodosItem;
