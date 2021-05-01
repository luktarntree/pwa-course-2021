import './App.css';
import { Link } from 'react-router-dom';

function App({ children }) {
  const logOut = () => {
    localStorage.setItem('username', '')
    localStorage.setItem('loggedin', '')
  }
  return (
    <div className="App">
      <div className="App-header">
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

export default App;
