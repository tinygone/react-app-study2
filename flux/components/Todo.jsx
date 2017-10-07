import React from 'react';
import uuid from 'uuid';
import TodoAction from '../actions/TodoAction';
import CreateButton from "../components/CreateButton";
import List from "../components/List";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  createTodo() {
    TodoAction.create({id: uuid.v4(), content: '3rd stufff'});
  }

  deleteTodo(id) {
    TodoAction.delete(id);
  }

  render() {
    return (
      <div>
        <List items={this.state.todos} onDelete={this.deleteTodo}/>
        <CreateButton onClick={this.createTodo}/>
      </div>
    );
  }
}

export default Todo;
