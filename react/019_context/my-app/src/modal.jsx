import React, { useState, useRef, useEffect } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);

  const modal = useRef();
  const button = useRef();

  useEffect(() => {
    if (modal.current == null || button.current == null) {
      return
    }
    modal.current.style.color = 'red';
  }, [modalShow])

  console.log(modal, button);
  
  return (
    <div className="app">
      <button 
        ref={button} 
        onClick={() => setModalShow(!modalShow)}>show me the 모달!!</button>
      {modalShow ? (<div ref={modal}>modal</div>) : null}
    </div>
  )
}

export default App;