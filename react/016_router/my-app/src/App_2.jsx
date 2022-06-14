import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// 겹치는 경로의 요소 다 렌더링한다.
// exact 속성으로 정확히 일치하는 주소의 컴포넌트만 렌더링시킬 수 있다.
function App() {
    const value = {
      name: 'yoo',
      age: '25',
      one: '10',
      two: '20',
      three: '30',
      four: '40',
    }
    return (
      <BrowserRouter>
        <Route path='/' 
              exact 
              component={Index} />
        <Route path='/one'
              exact 
              component={One} />
        <Route path='/one/ex'
              exact 
              component={OneExtend} />
        <Route path='/two' 
              component={Two} />
        <Route path='/three'
              render={() => <Three {...value} />} />
        <Route path='/four'>
          <Four {...value} />
        </Route>
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

function Three({ name, age }) {
  console.log(name, age);
  return <h1>제 이름은 {name}입니다.</h1>
}

function Four({ one, two, three, four }) {
  console.log(one, two, three, four);
  return <h1>{one}, {two}, {three}, {four}</h1>
}
  
export default App;