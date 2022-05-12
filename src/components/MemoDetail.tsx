import React from "react";
import { useSelector } from "react-redux";

import { GlobalState } from "@typeDefinition";

function MemoDetail() {
  const memo = useSelector((state: GlobalState) => state.memo.currentMemo);

  return (
    <div className="main bg-green-400 flex-1">
      {memo.title && (
        <div>
          <h2 className="text-xl p-4 pb-0">{memo.title}</h2>
          <p className="p-4">
            {memo.contents
              .trim()
              .split("\n")
              .map((line) => (
                <>
                  <span>{line}</span>
                  <br />
                </>
              ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default MemoDetail;
