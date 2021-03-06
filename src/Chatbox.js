import { useState } from 'react';
import './Chatbox.css';
import App from './App';
// import React, { useEffect, useState } from "react";

function Chatbox() {
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
        <App>
            <div className="App-chatroom-container">
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
        </App>
    );
}

export default Chatbox;
