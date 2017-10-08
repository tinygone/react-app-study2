import AppDispatcher from "../dispatcher/AppDispatcher";
import uuid from 'uuid';
import EventEmitter from 'events';
import assign from 'object-assign';

const TodoStore = assign({}, EventEmitter.prototype, {
  todos: [{id: uuid.v4(), content: 'first one'}],
  getAll() {
    return this.todos;
  },
  addTodo(todo) {
    this.todos.push(todo);
  },
  deleteTodo(id) {
    this.todos = this.todos.filter(item => item.id != id);
  },
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeChangeListener('onchange', callback);
  }
});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'CREATE_TODO' :
      console.log('create_todo');
      TodoStore.addTodo(action.todo);
      TodoStore.emitChange();
      break;
    case 'DELETE_TODO':
      console.log('delete_todo');
      TodoStore.deleteTodo(action.id);
      TodoStore.emitChange();
      break;
    default :
    // 默认操作
  }
});

export default TodoStore;
