declare module "@reducers/memo";
declare module "@reducers/todo";
declare module "@typeDefinitions";

export declare type TodoState = {
  focusing: string;
};

export interface Memo {
  id: string;
  title: string | null;
  contents: string | null;
}

export declare type MemoState = {
  memoList: { byId: Array<Memo>; allIds: Array<string> };
  currentMemo: Memo;
};

export declare type State = {
  todo: TodoState;
  memo: MemoState;
};
