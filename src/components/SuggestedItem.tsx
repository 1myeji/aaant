import React, { useState } from 'react';
import { type ISuggestedItemProps } from '../types/global';

const SEPARATOR = '~!@#$^*#%^&';
const MAX_STRING_LENGTH = 47;

function SuggestedItem({ suggestedItem, inputText, setInputText }: ISuggestedItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  if (typeof suggestedItem !== 'string' || typeof inputText !== 'string') {
    throw new Error('suggestedItem, inputText must be a string');
  }
  const cutItem =
    suggestedItem?.length > MAX_STRING_LENGTH
      ? `${suggestedItem.slice(0, MAX_STRING_LENGTH)}...`
      : suggestedItem;

  const handleItemClick = () => {
    setIsSelected(!isSelected);
    setInputText(suggestedItem);
  };

  return (
    <li className={`item${isSelected ? ' selected' : ''}`} onClick={handleItemClick}>
      {cutItem
        .replaceAll(inputText, `${SEPARATOR}${inputText}${SEPARATOR}`)
        .split(SEPARATOR)
        .map((item, index) => (
          <span key={index} style={{ color: item === inputText ? '#2BC9BA' : 'black' }}>
            {item}
          </span>
        ))}
    </li>
  );
}

export default SuggestedItem;
