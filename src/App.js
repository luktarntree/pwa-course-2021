import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App({ children }) {
  const username = useState(localStorage.getItem('username'));
  const logOut = () => {
    localStorage.setItem('username', '')
    localStorage.setItem('loggedin', '')
  }
  if (username === '') {
    return (
      <div>
        you are not login.
        <Link to="/">
          <button>Login</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="App-header">
          <div>{username}</div>
          <Link to="/friend-list">
            <button>Friends</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <Link to="/chatbox">
            <button>Chatbox</button>
          </Link>
          <Link to="/">
            <button onClick={logOut}>Log Out</button>
          </Link>
        </div>
        <div className="App-content">
          {children}
        </div>
      </div>
    );
  }
}

export default App;
