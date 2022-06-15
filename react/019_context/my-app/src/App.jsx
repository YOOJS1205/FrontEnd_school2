import React, { useEffect, useContext, useRef, createContext } from 'react';

// 요구사항)

// useEffect -> 데이터 가져올 때 useEffect를 사용해서 로딩중 구현하기
// useContext -> http://test.api.weniv.co.kr/ 데이터 가져와서 data를 useContext를 사용해서 자식 컴포넌트에 전달해주세요.
// useRef -> 하트

const App = () => {
  const heart = createContext({
    content: '❤️'
  })

  useEffect(() => {
  }, [])

  const { content } = useContext(heart);
  return (
    <div className='App'>
      <h1>{content}</h1>
    </div>
  )
}

export default App;