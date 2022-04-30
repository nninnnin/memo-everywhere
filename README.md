# Memo everywhere

어디에서나 쉽고 빠른 메모.

- 소셜로그인 지원하지 않음
- 오로지 직접 설정한 아이디 / 비밀번호

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

- 사용자 인증 방식

  - 인스타그램처럼, 아주 기본적인 아이디/비밀번호 형식의 사용자 인증 방식을 사용한다.
  - 아이디와 유저명을 구분하지 않는다. 아이디가 곧 유저명이 된다.

  - 유저이름이 `justin` 이라고 가정했을 때,
  - `memoeverywhere.com/justin` 로 접속하면 바로 로그인 화면으로 접속한다.
  - 유저이름과 비밀번호만 알면 어디에서든 로그인이 가능하다.

- 배포 및 사용

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
