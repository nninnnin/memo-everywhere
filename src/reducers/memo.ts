import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface Memo {
  title: string;
  contents: string;
}

const initialState: Array<Memo> = [];

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    create: {
      reducer: (state, action: PayloadAction<Memo>) => {
        state.push(action.payload);
      },
      prepare: (memo: Memo) => {
        // prepare callback function
        const id = nanoid();

        return { payload: { id, ...memo } };
      },
    },
  },
});

export const { create } = memoSlice.actions;

export default memoSlice.reducer;
