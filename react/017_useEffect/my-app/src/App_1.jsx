import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count % 2) {
      alert('홀수입니다.');
    } else {
      alert('짝수입니다.');
    }
  }, [count]); // count 변경 감지
  
  const handleCountUp =(e)=>{
    setCount(count+1)
  }
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;