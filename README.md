# Memo everywhere

어디에서나 쉽고 빠른 메모.

메모로 끝나지 않고, 내가 할 일들을 잊어버리지 않고 할 수 있도록 도와준다!

---

프로젝트 실행방법

`npm install`

`npm start`

---

기술스택

- ts 접목 예정
- redux (rtk), redux-saga

---

기능 정의

- 메모 기능

  - 모든 것들을 메모할 수 있는 자유로운 메모장
  - 카테고라이징 등 복잡한 메타데이터 입력 없이 오로지 날것의 메모만

- 할일 목록 기능

  - 메모와는 별개로 작동
  - 메모의 내용들을 정리해서 할일 목록으로 만들고 실제 태스크로 이어지는 flow
  - 별도의 모달로 리스트 에디팅 가능

- 사용자 인증 방식

  - 인스타그램처럼, 아주 기본적인 아이디/비밀번호 형식의 사용자 인증 방식을 사용한다.
  - 아이디와 유저명을 구분하지 않는다. 아이디가 곧 유저명이 된다.

  - 유저이름이 `justin` 이라고 가정했을 때,
  - `memoeverywhere.com/justin` 로 접속하면 바로 로그인 화면으로 접속한다.
  - 유저이름과 비밀번호만 알면 어디에서든 로그인이 가능하다.

- 배포 및 사용

---

UI / UX

[figma link](https://www.figma.com/file/I2HJE8n3GvWr4GI8kVAqNO/Untitled?node-id=0%3A1)

---

에러 노트

- Cannot use JSX unless the "--jsx" flag is provided.

  - tsconfig의 compilerOptions에 "./src/\*_/_.ts" 라는 경로를 추가해주었다.
  - https://stackoverflow.com/questions/50432556/cannot-use-jsx-unless-the-jsx-flag-is-provided
  - Gabriel의 답변을 보면 CRA의 내부설정에 문제가 있는 듯 하다.

- Property "memo" does not exist on type "unknown"

  - useSelector 콜백에서 state.memo 참조하는 부분에서 발생..

- Module not found: Can't resolve '@reducers/memo.ts' in /...

  - tsconfig.extend.json에 경로를 제대로 명시해주지 않았다..^^;

- An import path cannot end with a '.ts' extension

  - import ... from "@reducers/memo.ts" 에서 발생
  - https://bobbyhadz.com/blog/typescript-import-path-cannot-end-with-tsx-extension
