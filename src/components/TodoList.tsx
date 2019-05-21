import React, { ReactElement } from 'react';
import Todo from './TodoListItem';
import { TodoListItem } from '../containers/Todo';

interface TodoListProps {
  todos: TodoListItem[];
  handleRemove: (id: number) => void;
}
const TodoList = ({ todos, handleRemove }: TodoListProps): ReactElement => {
  function renderList(): ReactElement {
    if (todos.length === 0) {
      return <h3>No Todos remaining!</h3>;
    }
    return (
      <ul>
        {todos.map(
          (todo: TodoListItem): ReactElement => {
            return <Todo todo={todo} remove={handleRemove} key={todo.id} />;
          }
        )}
      </ul>
    );
  }

  return (
    <div>
      <span className="row">
        <b>Your Todos:</b>
      </span>
      {renderList()}
    </div>
  );
};

export default TodoList;
