import { createReducer, createAction } from "@reduxjs/toolkit";

const create = createAction("memo/create");

const initialState = {
  memoList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(create, (state, action) => {
    // state 내부에 있는 memoList에서 원하는 메모를 어떻게 찾을것인가?
  });
});
