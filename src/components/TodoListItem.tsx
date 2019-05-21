import React from 'react';
import { TodoListItem } from '../containers/Todo';

interface TodoProps {
  todo: TodoListItem;
  remove: (id: number) => void;
}
const Todo = ({ todo, remove }: TodoProps) => (
  <li>
    {todo.text}
    <span
      onClick={() => {
        remove(todo.id);
      }}
    >
      <b>&nbsp;XX</b>
    </span>
  </li>
);

export default Todo;
