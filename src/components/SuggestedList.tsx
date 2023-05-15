import React from 'react';
import SuggestedItem from './SuggestedItem';
import { type ISuggestedListProps } from '../types/global';

function SuggestedList({ suggestedList }: ISuggestedListProps) {
  return suggestedList.length !== 0 ? (
    <ul className="suggested-list">
      {suggestedList.map((suggestedItem: string) => (
        <SuggestedItem key={suggestedItem} suggestedItem={suggestedItem} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
}
export default SuggestedList;
