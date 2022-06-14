import React, { useState, useRef } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  // useRef => 재렌더링이 안되는 것이 큰 포인트!!

  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  console.log(emailInput);

  const inputCheck = (e) => {
    e.preventDefault();
    console.log(emailInput);
    console.log(pwInput);
    console.log(emailInput.current.value);
    console.log(pwInput.current.value);
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);

    // 바닐라 JS에서는?
    // document.querySelector의 value를 set함수에 넣는다. => 이렇게 하면 안됨
    // useRef 사용하면 id, class 명을 기억할 필요가 없다. 개꿀
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;