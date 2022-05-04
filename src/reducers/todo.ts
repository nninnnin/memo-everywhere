import { createSlice } from "@reduxjs/toolkit";

import { TodoState } from "../../index";

const initialState: TodoState = {
  focusing: "꿈꿔 그리구 숨셔",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setFocusing: (state, action) => {
      state.focusing = action.payload;
    },
  },
});

export const { setFocusing } = todoSlice.actions;

export default todoSlice.reducer;
