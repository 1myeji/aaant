import React, { useCallback, useState } from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa';

// import { deleteTodo } from '../api/todo';

function TodoItem({ id, title, setTodos }: any) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      // await deleteTodo(id);

      setTodos((prev: any) => prev.filter((item: any) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={handleRemoveTodo} type="button">
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
}

export default TodoItem;
