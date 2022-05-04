import React from "react";
import { useSelector, useDispatch } from "react-redux";
// @ts-ignore
import { setCurrentMemo } from "@reducers/memo.ts";
import { State } from "@typeDefinition";

function Navigator() {
  const memo = useSelector((state: State) => state.memo);
  const memoList = memo.memoList;

  const dispatch = useDispatch();

  const handleMemoTitleClick = function (memoId) {
    dispatch(setCurrentMemo(memoList.byId[memoId]));
  };

  return (
    <div className="navigator bg-slate-300 w-[300px]">
      {memoList.allIds.map((memoId) => {
        return (
          <div
            key={memoId}
            className="w-full py-3 text-center hover:font-semibold cursor-pointer hover:bg-red-400"
            onClick={() => handleMemoTitleClick(memoId)}
          >
            <span>{memoList.byId[memoId].title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Navigator;
