export type ISuggestedListData = {
  q: string;
  result: string[];
  qty: number;
  total: number;
  page: number;
  limit: number;
};

export type ISuggestedListProps = {
  suggestedList: string[];
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export type ISuggestedItemProps = {
  suggestedItem: string;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};
