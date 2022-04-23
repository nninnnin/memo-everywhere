import { useState } from "react";

function App() {
  const memoList = [
    {
      title: "이것이 나의 첫 메모",
      contents: "안녕하세요 반갑습니다 어린이 여러분",
    },
    {
      title: "이것은 나의 두번째 메모",
      contents: "안녕하세요 반갑습니다 어린이 여러분",
    },
    {
      title: "이것이 나의 세번째 메모",
      contents: "안녕하세요 반갑습니다 어린이 여러분",
    },
  ];

  return (
    <div className="bg-slate-500 text-white w-screen h-screen flex flex-col">
      <header className="p-10 flex justify-between">
        <h1 className="text-3xl font-bold underline">Memo everywhere!</h1>

        <span className="login">로그아웃하기</span>
      </header>

      <div className="w-full flex flex-1">
        <div className="navigator bg-slate-300 w-[300px]">
          {memoList.map(({ title }) => {
            return (
              <div className="w-10/12 my-3 mx-auto text-center">
                <span className=" hover:font-semibold cursor-pointer">
                  {title}
                </span>
              </div>
            );
          })}
        </div>
        <div className="main bg-slate-400 flex-1">
          {memoList.map(({ title, contents }) => {
            return (
              <div>
                <h2>{title}</h2>
                <p>{contents}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
