import './App.css';
import Clock from './Clock';

function App() {
  const name = 'junsang';
  const result = 1;
  const someStyle = {backgroundColor: 'black', color: 'white'};
  function age() {
    return 10;
  }
  return (
    <div>
      <h1 className="one">hello {name} {age()}</h1>
      <h1 style={{backgroundColor: 'black', color:'white'}}>hello world</h1>
      <p>{result ? 'one' : 'zero'}</p>
      <h1 style={someStyle}>Hi</h1>
      <Clock />
    </div>
  );
}

export default App;
