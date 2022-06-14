import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// 겹치는 경로의 요소 다 렌더링한다.
// exact 속성으로 정확히 일치하는 주소의 컴포넌트만 렌더링시킬 수 있다.
function App() {
    return (
      <BrowserRouter>
        <Route path='/' 
              exact 
              component={HomePage} />
        <Route path='/about'
              exact 
              component={AboutPage} />
        <Route path='/contact' 
              component={ContactPage} />
        <Route path='/blog'
              component={BlogPage}/>
      </BrowserRouter>
    );
  }

function HomePage() {
  return <h1>home</h1>
}

function AboutPage() {
  return <h1>about</h1>
}

function ContactPage() {
  return <h1>contact</h1>
}

function BlogPage() {
  return <h1>blog</h1>
}
  
export default App;