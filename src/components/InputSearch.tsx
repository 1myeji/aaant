import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FaSpinner } from 'react-icons/fa';
import getSuggestedSearchList from '../api/search';
import SuggestedList from './SuggestedList';
import { type ISuggestedListData } from '../types/global';

function InputSearch() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [suggestedList, setSuggestedList] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [qty, setQty] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastSuggestedItemRef = useCallback(
    (el: HTMLElement | null) => {
      if (isLoading || qty === 0) return;
      if (observer.current !== null) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(prev => prev + 1);
        }
      });
      if (el !== null) observer.current.observe(el);
    },
    [isLoading],
  );

  useEffect(() => {
    const fetchSuggestedSearchLists = async () => {
      if (inputText.trim() === '') return setSuggestedList([]);
      try {
        setIsLoading(true);
        const response: ISuggestedListData = await getSuggestedSearchList(inputText, page);
        setSuggestedList(prev => [...prev, ...response.result]);
        setQty(response.qty);
        console.log(response);
      } catch (error) {
        alert('Something went wrong.');
      } finally {
        setIsLoading(false);
      }
      return null;
    };

    const debounceFetch = setTimeout(() => {
      void fetchSuggestedSearchLists();
    }, 500);

    return () => {
      clearTimeout(debounceFetch);
    };
  }, [inputText, page]);

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
          onChange={e => {
            setInputText(e.target.value);
            setSuggestedList([]);
          }}
          disabled={isLoading}
        />
        {isLoading && <FaSpinner className="spinner" />}
      </form>
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
