import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Confetti from "react-confetti";

// @ts-ignore
import ContextMenu from "@components/ContextMenu.tsx";
// @ts-ignore
import { setFocusing } from "@reducers/todo.ts";
import { State } from "../../index";

function Focusing() {
  const focusing = useSelector((state: State) => state.todo.focusing);
  const dispatch = useDispatch();

  const [onConfetti, setOnConfetti] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [todo, setTodo] = useState("");
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

  const setEditModeTrue = () => {
    setTodo("");
    setEditMode(true);
  };

  const handleContentMenuOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setContextPosition({
      top: e.clientY,
      left: e.clientX + 10,
    });
    setShowContextMenu((prev) => !prev);
  };

  return (
    <>
      <span
        className={`p-2 ${
          editMode || showContextMenu ? "bg-black" : "bg-red-200"
        } ${
          editMode ? "" : "hover:bg-black"
        } hover:cursor-pointer select-none relative overflow-hidden`}
        onClick={() => setOnConfetti((prev) => !prev)}
        onContextMenu={handleContentMenuOpen}
      >
        {editMode ? (
          <input
            type="text"
            className="bg-black border-0 outline-none"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (!todo) return;

                dispatch(setFocusing(todo));
                setEditMode(false);
              }
            }}
            onBlur={() => {
              setEditMode(false);
            }}
            autoFocus
          />
        ) : (
          focusing
        )}
        {onConfetti && (
          <Confetti
            className="absolute top-0 left-0"
            width={500}
            height={500}
            colors={["#ffffff"]}
          />
        )}
      </span>
      {showContextMenu && (
        <ContextMenu
          contextPosition={contextPosition}
          handleTextEditButtonClick={setEditModeTrue}
        />
      )}
    </>
  );
}

export default Focusing;
