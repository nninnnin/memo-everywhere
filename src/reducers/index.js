import memoReducer from "./memo.ts";
import todoReducer from "./todo.ts";

const rootReducer = {
  memo: memoReducer,
  todo: todoReducer,
};

export default rootReducer;
