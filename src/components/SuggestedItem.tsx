import React from 'react';
import { type ISuggestedItemProps } from '../types/global';

function SuggestedItem({ suggestedItem }: ISuggestedItemProps) {
  if (typeof suggestedItem !== 'string') throw new Error('suggestedItem must be a string');
  const Item = suggestedItem?.length > 47 ? `${suggestedItem.slice(0, 47)}...` : suggestedItem;
  return (
    <li className="item">
      <span>{Item}</span>
    </li>
  );
}

export default SuggestedItem;
