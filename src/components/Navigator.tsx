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
                <div key={memoId} className="w-10/12 my-3 mx-auto text-center">
                  <span className=" hover:font-semibold cursor-pointer" onClick={(e) => handleMemoTitleClick(memoId)}>
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
