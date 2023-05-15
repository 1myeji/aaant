import React from 'react';
import TodoItem from './TodoItem';
import { type ITodoListProps } from '../types/global';

function TodoList({ suggestedList }: ITodoListProps) {
  return suggestedList.length !== 0 ? (
    <ul className="suggested-list">
      {suggestedList.map((suggestedItem: string) => (
        <TodoItem key={suggestedItem} suggestedItem={suggestedItem} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
}
export default TodoList;
