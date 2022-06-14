import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  console.log("컴포넌트 재렌더링 테스트중입니다.");

  useEffect(() => {
    console.log("useEffect 테스트중입니다.");
  }, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
    </>
  );
}
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;