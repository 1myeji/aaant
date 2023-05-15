import React from 'react';
import SuggestedItem from './SuggestedItem';
import { type ISuggestedListProps } from '../types/global';

function SuggestedList({ suggestedList, inputText }: ISuggestedListProps) {
  return suggestedList.length !== 0 ? (
    <ul className="suggested-list">
      {suggestedList.map((suggestedItem: string) => (
        <SuggestedItem key={suggestedItem} suggestedItem={suggestedItem} inputText={inputText} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">검색어없음...</div>
  );
}
export default SuggestedList;
