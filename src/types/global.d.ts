export type ISuggestedListData = {
  q: string;
  result: string[];
  qty: number;
  total: number;
  page: number;
  limit: number;
};

export type ITodoListProps = {
  suggestedList: string[];
};

export type ITodoItemProps = {
  suggestedItem: string;
};
