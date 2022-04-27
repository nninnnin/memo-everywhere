import React from "react";

function Navigator ({ memoList, handleMemoTitleClick }) {
  console.log(memoList);

  return (
    <div
      className="navigator bg-slate-300 w-[300px]"
    >
          {
            memoList.allIds.map((memoId) => {
              return (
                <div key={memoId} className="w-full py-3 text-center hover:font-semibold cursor-pointer hover:bg-red-400" onClick={(e) => handleMemoTitleClick(memoId)}>
                  <span
                  >
                    {memoList.byId[memoId].title}
                  </span>
                </div>
              );
            })
          }
        </div>
  );
}

export default Navigator;
