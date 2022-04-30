import React from "react";
import { useSelector } from "react-redux";

function MemoDetail() {
  const memo = useSelector((state) => state["memo"].currentMemo);

  return (
    <div className="main bg-green-400 flex-1">
      {
        <div>
          <h2 className="text-2xl p-4">{memo.title}</h2>
          <p className="p-4">{memo.contents}</p>
        </div>
      }
    </div>
  );
}

export default MemoDetail;
