import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Navigator from "@components/Navigator.tsx";
import MemoDetail from "@components/MemoDetail.tsx";

const memoId1 = uuidv4();
const memoId2 = uuidv4();
const memoId3 = uuidv4();

const memoList = {
  "byId": {
    [memoId1]: {
      title: "이것이 나의 첫 메모",
      contents: "안녕하세요 반갑습니다 어린이 여러분",
    },
    [memoId2]: {
      title: "이것은 나의 두번째 메모",
      contents: "안녕하세요 반갑습니다 어린이 여러분",
    },
    [memoId3]: {
      title: "이것이 나의 세번째 메모",
      contents: "안녕하세요 반갑습니다 어린이 여러분",
    },
  },
  "allIds": [memoId1, memoId2, memoId3]
};

function App() {
  const [currentMemo, setCurrentMemo] = useState({});

  useEffect(() => {
    setCurrentMemo(memoList.byId[memoList.allIds[0]]);
  }, []);

  return (
    <div className="bg-slate-500 text-white w-screen h-screen flex flex-col">
      <header className="p-10 flex justify-between">
        <h1 className="text-3xl font-bold underline">Memo everywhere!</h1>

        <span className="login">로그아웃하기</span>
      </header>

      <div className="w-full flex flex-1">
        <Navigator memoList={memoList} handleMemoTitleClick={(memoId) => setCurrentMemo(memoList.byId[memoId])} />

        <MemoDetail memo={currentMemo} />
      </div>
    </div>
  );
}

export default App;
