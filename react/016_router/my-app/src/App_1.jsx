import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// 겹치는 경로의 요소 다 렌더링한다.
function App() {
    return (
      <BrowserRouter>
        <Route path='/' component={Index} />
        <Route path='/one' component={One} />
        <Route path='/one/ex' component={OneExtend} />
        <Route path='/two' component={Two} />
        <Route path='/three' component={Three} />
      </BrowserRouter>
    );
  }

function Index() {
  return <h1>hello world 0</h1>
}

function One() {
  return <h1>hello world 1</h1>
}

function OneExtend() {
  return <h1>hello world 1 ex</h1>
}

function Two() {
  return <h1>hello world 2</h1>
}

function Three() {
  return <h1>hello world 3</h1>
}
  
export default App;