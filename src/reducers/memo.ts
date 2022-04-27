import { createSlice } from "@reduxjs/toolkit";

type Memo = {
  title: string;
  contents: string;
};

const initialState: Memo[] = [];

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    create(state, action) {
      state.push(action.payload);
    },
  },
});

export const { create } = memoSlice.actions;

export default memoSlice.reducer;
