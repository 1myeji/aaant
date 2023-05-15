import React from 'react';
import { type ISuggestedItemProps } from '../types/global';

function SuggestedItem({ suggestedItem }: ISuggestedItemProps) {
  return (
    <li className="item">
      <span>{suggestedItem}</span>
    </li>
  );
}

export default SuggestedItem;
