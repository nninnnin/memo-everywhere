import React from "react";
import { useDispatch } from "react-redux";

function ContextMenu({ contextPosition: { left, top }, handleOnBlur }) {
  return (
    <div
      className="fixed bg-white"
      style={{ left: `${left}px`, top: `${top}px` }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <ul className="flex flex-around flex-col">
        <li
          className="hover:bg-slate-200 hover:cursor-pointer text-black p-2"
          onClick={() => {}}
        >
          텍스트
        </li>
        <li className="hover:bg-slate-200 hover:cursor-pointer text-black p-2">
          컬러링
        </li>
      </ul>
    </div>
  );
}

export default ContextMenu;
