import React, { useCallback, useState } from 'react';
import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import getTodoList from '../api/todo';

function InputTodo({ setTodos }: any) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const aaa = async () => {
    const response = await getTodoList('lorem', 1);
    console.log(response);
  };

  aaa();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (trimmed !== null) {
          return alert('Please write something');
        }

        // const newItem = { title: trimmed };
        // const { data } = await createTodo(newItem);

        // if (data !== null) {
        //   return setTodos((prev: any) => [...prev, data]);
        // }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
      return null;
    },
    [inputText, setTodos],
  );

  return (
    <form
      className={`form-container${isFocus ? ' focused' : ''}`}
      onSubmit={handleSubmit}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      <img src="/Union.png" alt="search-icon" className="search-icon" />
      <input
        className="input-text"
        placeholder="검색하세요"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
}

export default InputTodo;
