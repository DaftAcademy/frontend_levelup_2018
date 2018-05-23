/* eslint-disable react/no-multi-comp */

import * as React from 'react';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@observer
class Todo extends React.Component {
  static propTypes = {
    todo: PropTypes.object,
  }

  @action.bound
  handleToggle() {
    this.props.todo.done = !this.props.todo.done;
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.done} onClick={this.handleToggle}/>
        {this.props.todo.value}
      </li>
    );
  }
}


@inject('todoStore')
@observer
class Todos extends React.Component {
  static propTypes = {
    todoStore: PropTypes.object,
  }

  @observable newTodoValue = '';

  @action.bound
  handleChange(ev) {
    const { value } = ev.target;
    this.newTodoValue = value;
  }

  @action.bound
  handleAddButtonClick() {
    const { todoStore } = this.props;

    todoStore.addTodo(this.newTodoValue);
    this.newTodoValue = '';
  }

  render() {
    const { todoStore } = this.props;
    return (
      <div>
        <h2>Basic TODO with MobX</h2>
        <input value={this.newTodoValue} onChange={this.handleChange} />
        <button onClick={this.handleAddButtonClick}>Add</button>
        <ul>
          {todoStore.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </ul>
        <div>Todo: {todoStore.undoneCnt} / {todoStore.todoCnt}</div>
      </div>
    );
  }
}


export default Todos;
