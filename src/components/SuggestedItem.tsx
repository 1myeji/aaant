import React from 'react';
import { type ISuggestedItemProps } from '../types/global';

const SEPARATOR = '~!@#$';
const MAX_STRING_LENGTH = 47;

function SuggestedItem({ suggestedItem, inputText }: ISuggestedItemProps) {
  if (typeof suggestedItem !== 'string' || typeof inputText !== 'string') {
    throw new Error('suggestedItem, inputText must be a string');
  }
  const cutItem =
    suggestedItem?.length > MAX_STRING_LENGTH
      ? `${suggestedItem.slice(0, MAX_STRING_LENGTH)}...`
      : suggestedItem;
  return (
    <li className="item">
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
