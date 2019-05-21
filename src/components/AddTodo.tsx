import React, { ChangeEvent, Component, ReactElement } from 'react';
import { TodoListItem } from '../containers/Todo';

interface AddTodoProps {
  handleAdd: (todo: TodoListItem) => void;
}

interface AddTodoState {
  todoText: string;
}

class AddTodo extends Component<AddTodoProps, AddTodoState> {
  public constructor(props: AddTodoProps) {
    super(props);
    this.state = {
      todoText: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  private _handleChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      todoText: event.target.value
    });
  }

  private _handleSubmit(): void {
    if (!this.state.todoText.trim()) return;
    const newTodo = {
      text: this.state.todoText.trim(),
      id: new Date().getTime()
    };
    this.props.handleAdd(newTodo);
    this.setState({
      todoText: ''
    });
  }

  public render(): ReactElement {
    return (
      <div className="row">
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this._handleChange}
          className="column column-60"
        />
        <button
          className="button button-outline column column-10"
          onClick={this._handleSubmit}
        >
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

export default AddTodo;
