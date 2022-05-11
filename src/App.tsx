import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

// @ts-ignore
import Navigator from "@components/Navigator.tsx";
// @ts-ignore
import MemoDetail from "@components/MemoDetail.tsx";
// @ts-ignore
import Header from "@components/Header.tsx";
// @ts-ignore
import { hydrate } from "@reducers/memo.ts";

const memoId1 = uuidv4();
const memoId2 = uuidv4();
const memoId3 = uuidv4();
const memoId4 = uuidv4();

const memoList = {
  byId: {
    [memoId1]: {
      title: "타입스크립트 공부 자료들",
      contents: `
        https://ts.chibicode.com/todo/
        https://github.com/typescript-kr/awesome-typescript-korean
        `,
    },
    [memoId2]: {
      title: "custom context menu 구현",
      contents: `
        React에서 제공하는 portal을 사용하지 않았을 경우와 사용했을 경우 어떤 차이가 있는가?
        구현 => 리팩토링 하며 기록
        `,
    },
    [memoId3]: {
      title: "Prisma, yarn berry",
      contents: "Mono repository 구성 실습",
    },
    [memoId4]: {
      title: "index.d.ts",
      contents: "type definition 명확히 사용하는 방법",
    },
  },
  allIds: [memoId1, memoId2, memoId3, memoId4],
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrate({ memoList, currentMemo: { title: "", contents: "" } }));
  }, [dispatch]);

  return (
    <div className="bg-blue-500 text-white w-screen h-screen flex flex-col">
      <Header />

      <div className="w-full flex flex-1">
        <Navigator />

        <MemoDetail />
      </div>
    </div>
  );
}

export default App;
