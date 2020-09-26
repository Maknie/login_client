import React, {useState} from 'react';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup';


function App() {
  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    console.log(tok)
    console.log("APP TOKEN")
    setToken(tok);
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/>
      <SignUp />
    </div>
  );
}

export default App;
