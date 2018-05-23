import { observable, action, autorun, computed } from 'mobx';

let nextTodoId = 1;

export class ToDoStore {
  @observable todos = [];

  constructor() {
    this.disposeAutorun = autorun(() => {
      // console.log( this.todos.map(({ value }) => value).join(', '));
    });
  }

  @computed
  get todoCnt() {
    return this.todos.length;
  }

  @computed
  get undoneCnt() {
    return this.todos.reduce((acc, { done }) => acc + (done ? 0 : 1), 0);
  }

  @action
  addTodo(v) {
    this.todos.push({
      id: nextTodoId,
      value: v,
      done: false,
    });

    nextTodoId += 1;
  }
}

const instance = new ToDoStore();

export default instance;
