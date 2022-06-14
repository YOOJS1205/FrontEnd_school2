import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    console.log('count가 감시되고 있습니다.')
  }, [count, countTwo]); // count 변경 감지

  useEffect(() => {
    console.log('hi');
  }, [])

  console.log('hi');

  const handleCountUp =(e)=>{
    setCount(count+1)
  }

  const handleCountUpTwo = e => {
    setCountTwo(countTwo + 1);
  }
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
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