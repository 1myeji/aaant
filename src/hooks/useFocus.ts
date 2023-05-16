import { useState } from 'react';

const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return { isFocus, handleFocus, handleBlur };
};

export default useFocus;
