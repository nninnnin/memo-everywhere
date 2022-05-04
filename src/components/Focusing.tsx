import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// @ts-ignore
import ContextMenu from "@components/ContextMenu.tsx";
import { State } from "../../index";

function Focusing() {
  const focusing = useSelector((state: State) => state.todo.focusing);

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextPosition, setContextPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    window.onclick = function () {
      setShowContextMenu(false);
    };
    window.oncontextmenu = function (e) {
      e.preventDefault();
      setShowContextMenu(false);
    };
  }, []);

  const handleContentMenuOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { width, height } = e.target.getBoundingClientRect();

    setContextPosition({
      top: e.clientY - height * 0.3,
      left: e.clientX - width * 0.02,
    });
    setShowContextMenu((prev) => !prev);
  };

  return (
    <>
      <span
        className={`p-2 bg-red-200 hover:cursor-pointer select-none`}
        onContextMenu={handleContentMenuOpen}
      >
        {focusing}
      </span>
      {showContextMenu && <ContextMenu contextPosition={contextPosition} />}
    </>
  );
}

export default Focusing;
