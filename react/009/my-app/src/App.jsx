import './App.css';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';


function App() {
  const user = {
    login: true,
    name: 'Yoo',
    id: 'junsang8921@gmail.com',
    nickName: 'jun',
  }

  return (
    <>
    {user.login ? <Homepage userName={user.name}
    id={user.id} nickName={user.nickName} /> : <Login />}
    </>
  );
}

export default App;