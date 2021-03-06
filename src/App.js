import { useState } from 'react';
import './App.css';
// import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox'

function App({ children }) {
  return (
    <div className="App">
      <div className="App-header">
        <Link to="/friend-list">
          <button>Friends</button>
        </Link>
      </div>
      <div className="App-content">
        {children}
      </div>
    </div>
  );
}

export default App;
