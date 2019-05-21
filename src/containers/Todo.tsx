import React, { Component, ReactElement } from 'react';
import Title from '../components/Title';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

interface TodoAppState {
  todos: TodoListItem[];
}

export interface TodoListItem {
  text: string;
  id: number;
}

export default class TodoApp extends Component<{}, TodoAppState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      todos: [
        { text: ' This is a simple todo list app written in React!', id: 1 },
        {
          text: 'Hover over todos and click on the `XX` to delete them!',
          id: 2
        },
        { text: 'Add new todos if you like!', id: 3 }
      ]
    };

    this._addTodo = this._addTodo.bind(this);
    this._removeTodo = this._removeTodo.bind(this);
  }

  private _addTodo(todo: TodoListItem): void {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  private _removeTodo(id: number): void {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  public render(): ReactElement {
    return (
      <div className="wrapper">
        <Title />
        <AddTodo handleAdd={this._addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this._removeTodo} />
      </div>
    );
  }
}
