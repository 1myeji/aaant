import React from 'react';
import SuggestedItem from './SuggestedItem';
import { type ISuggestedListProps } from '../types/global';

function SuggestedList({
  suggestedList,
  inputText,
  setInputText,
  lastSuggestedItemRef,
}: ISuggestedListProps) {
  return suggestedList.length !== 0 ? (
    <ul className="suggested-list">
      {suggestedList.map((suggestedItem: string, index: number) => (
        <SuggestedItem
          ref={
            index === suggestedList.length - 1 && suggestedList.length % 10 === 0
              ? lastSuggestedItemRef
              : null
          }
          key={index}
          suggestedItem={suggestedItem}
          inputText={inputText}
          setInputText={setInputText}
        />
      ))}
    </ul>
  ) : (
    <div className="empty-list">검색어없음...</div>
  );
}

export default SuggestedList;
