import { useEffect, useState } from 'react';
import getSuggestedSearchList from '../api/search';
import { type ISuggestedListData } from '../types/global';

const useSuggestedSearch = (inputText: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [qty, setQty] = useState(0);
  const [suggestedList, setSuggestedList] = useState<string[]>([]);

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

  return { isLoading, suggestedList, qty, page, setPage, setSuggestedList };
};

export default useSuggestedSearch;
