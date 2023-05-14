import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }: any) {
  return todos.length !== 0 ? (
    <ul>
      {todos.map(({ id, title }: any) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">하하하</div>
  );
}
export default TodoList;
