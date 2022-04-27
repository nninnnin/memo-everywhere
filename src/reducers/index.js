import memoReducer from "./memo.ts";

console.log('reducer..dirname', __dirname)

const rootReducer = {
  memo: memoReducer,
};

export default rootReducer;
