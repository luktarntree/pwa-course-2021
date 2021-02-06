import { useState } from 'react';
import './App.css';
// import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");

  const [lines, setLines] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  }

  const sendOnEnter = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  }
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="App-chatroom">
        {
          lines.map(x => {
            return <div className="App-chatroom-text">
              {x}
            </div>
          }
          )
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} placeholder="start typing to chat :)" onChange={onTextChange} onKeyDown={sendOnEnter} />
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;
