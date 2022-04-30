import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface Memo {
  id: string;
  title: string | null;
  contents: string | null;
}

const initialState: {
  memoList: { byId: Array<Memo>; allIds: Array<string> };
  currentMemo: Memo;
} = {
  memoList: {
    allIds: [],
    byId: [],
  },
  currentMemo: {
    id: null,
    title: null,
    contents: null,
  },
};

// property push does not exist on type Writable draft
const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    createMemo: {
      reducer: (state, action: PayloadAction<Memo>) => {
        const newMemo = action.payload;

        state.memoList.allIds.push(newMemo.id);
        state.memoList.byId.push(newMemo);
      },
      prepare: (memo: Memo) => {
        // prepare callback function
        const id = nanoid();

        return { payload: { id, ...memo } };
      },
    },
    hydrate: (state, action) => {
      const { memoList, currentMemo } = action.payload;
      state.memoList = memoList;
      state.currentMemo = currentMemo;
    },
    setCurrentMemo: (state, action) => {
      state.currentMemo = action.payload;
    },
  },
});

export const { createMemo, hydrate, setCurrentMemo } = memoSlice.actions;

export default memoSlice.reducer;
