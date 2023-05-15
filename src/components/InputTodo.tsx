import React, { useEffect, useState } from 'react';
import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import getSuggestedSearchList from '../api/search';
import TodoList from './TodoList';
import { type ISuggestedListData } from '../types/global';

function InputTodo() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [suggestedList, setSuggestedList] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestedSearchLists = async () => {
      if (inputText.trim() === '') return;
      try {
        setIsLoading(true);
        const response: ISuggestedListData = await getSuggestedSearchList(inputText, 1);
        setSuggestedList(response.result);
        console.log(response);
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setIsLoading(false);
      }
    };

    const debounceFetch = setTimeout(() => {
      void fetchSuggestedSearchLists();
    }, 500);

    return () => {
      clearTimeout(debounceFetch);
    };
  }, [inputText]);

  return (
    <>
      <form
        className={`form-container${isFocus ? ' focused' : ''}`}
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
      <TodoList suggestedList={suggestedList} />
    </>
  );
}

export default InputTodo;
