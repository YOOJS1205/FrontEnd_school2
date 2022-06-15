import React, { useState, useLayoutEffect, useEffect } from "react";

// useEffect vs useLayoutEffect

function App() {
  const [num, setNum] = useState(0);

  const handleOnClick = () => {
    setNum(num + 1);
  }

  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect_return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect_return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect_return_3')
    }
  }, [num])

  useLayoutEffect(()=>{
    console.log(1)
    return () => {
      console.log('return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log(2)
    return () => {
      console.log('return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log(3)
    return () => {
      console.log('return_3')
    }
  }, [num])

  return (
    <div className="App">
      <button onClick={handleOnClick}>{num}</button>
    </div>
  )
}

export default App;