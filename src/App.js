import React, {useState} from 'react';
import './App.css';
import Login from './pages/login';
import MyRouter from './MyRouter';


function App() {
  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    console.log(tok)
    console.log("APP TOKEN")
    setToken(tok);
  }

  return (
    <div className="App">
      <MyRouter />  
    </div>
  );
}

export default App;
