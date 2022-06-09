import React, { useState } from 'react';

// useState가 없으면 변수 변경될 때 마다 다시 렌더링해야한다를 알려줌.

function Resume(props) {
  const [like, setLike] = useState(false);

  function handleClickLike() {
      setLike(like => !like);
  }

  return(
      <div>
          <button onClick={handleClickLike}>showLike</button>
          {like ? <span>like</span> : null}
      </div>
  )
}

function App() {
  return (
    <div className="App">
      hello world
      <Resume />
    </div>
  );
}

export default App;