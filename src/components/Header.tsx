import React from "react";
// @ts-ignore
import Focusing from "@components/Focusing.tsx";

function Header() {
  return (
    <header className="p-10 flex justify-between items-center">
      <Focusing />

      <span className="login">로그아웃하기</span>
    </header>
  );
}

export default Header;
