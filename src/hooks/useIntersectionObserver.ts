import { useRef, useCallback } from 'react';

const useIntersectionObserver = (
  isLoading: boolean,
  qty: number,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
) => {
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
    [isLoading, qty],
  );

  return { page, lastSuggestedItemRef };
};

export default useIntersectionObserver;
