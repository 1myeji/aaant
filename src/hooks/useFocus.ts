import { useRef } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const setFocus = () => {
    ref.current?.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
