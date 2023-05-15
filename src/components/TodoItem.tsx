import React from 'react';
import { type ITodoItemProps } from '../types/global';

function TodoItem({ suggestedItem }: ITodoItemProps) {
  return (
    <li className="item">
      <span>{suggestedItem}</span>
    </li>
  );
}

export default TodoItem;
