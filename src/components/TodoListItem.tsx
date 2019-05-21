import React, { ReactElement } from 'react';
import { TodoListItem } from '../containers/Todo';

interface TodoProps {
  todo: TodoListItem;
  remove: (id: number) => void;
}
const Todo = ({ todo, remove }: TodoProps): ReactElement => (
  <li>
    {todo.text}
    <span
      onClick={(): void => {
        remove(todo.id);
      }}
    >
      <b>&nbsp;XX</b>
    </span>
  </li>
);

export default Todo;
