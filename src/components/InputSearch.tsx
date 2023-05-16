import React, { useState, useEffect, type ChangeEvent } from 'react';
import { FaSpinner } from 'react-icons/fa';
import SuggestedList from './SuggestedList';
import useFocus from '../hooks/useFocus';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useSuggestedSearch from '../hooks/useSuggestedSearch';

function InputSearch() {
  const [inputText, setInputText] = useState('');
  const { isFocus, handleFocus, handleBlur } = useFocus();
  const { isLoading, suggestedList, qty, page, setPage, setSuggestedList } =
    useSuggestedSearch(inputText);
  const { lastSuggestedItemRef } = useIntersectionObserver(isLoading, qty, page, setPage);

  const handleInputTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    setPage(1);
    setSuggestedList([]);
  }, [inputText]);

  return (
    <>
      <div
        className={`form-container${isFocus ? ' focused' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <img src="/Union.png" alt="search-icon" className="search-icon" />
        <input
          className="input-text"
          placeholder="검색하세요"
          value={inputText}
          onChange={handleInputTextChange}
          disabled={isLoading}
        />
        {isLoading && <FaSpinner className="spinner" />}
      </div>
      <SuggestedList
        suggestedList={suggestedList}
        inputText={inputText}
        setInputText={setInputText}
        lastSuggestedItemRef={lastSuggestedItemRef}
      />
    </>
  );
}

export default InputSearch;
