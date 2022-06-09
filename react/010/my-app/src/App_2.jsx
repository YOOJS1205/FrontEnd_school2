import React, { useState } from 'react';

const Greeting = () => {
  const [message, setMessage] = useState('Look at here!')
  const onMouseEnter = () => {
    console.log("안녕하세요!");
    setMessage('hello');
  };

  const onMouseLeave = () => {
    console.log("안녕히가세요");
    setMessage('bye');
  };

  return (
    <div>
      <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {message}
      </p>
    </div>
  );
};

export default Greeting;