import { useState, useEffect } from 'react';
import './Chatbox.css';
import App from './App';
// import React, { useEffect, useState } from "react";

function Chatbox() {
    //Use State
    const [text, setText] = useState("");
    const [lines, setLines] = useState([]);

    //Use Effect
    useEffect(() => {
        console.log("total text chat: " + lines.length)
    }, [lines]);

    //Functions
    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onSend = () => {
        setLines(lines => [...lines, {
            sender: "Me",
            message: text,
            timestamp: (new Date()),
            classname: "default"
        }]);
        setText("");
    }

    const sendOnEnter = (e) => {
        if (e.key === 'Enter') {
            onSend();
        }
    }

    //Render
    return (
        <App>
            <div className="App-chatroom-container">
                <div className="App-chatroom">
                    {
                        lines.map(x => {
                            return <div className={"App-chatroom-text App-chatroom-text-" + x.classname}>
                                <div>
                                    {x.sender + ":"}
                                </div>
                                <div>
                                    {x.message}
                                </div>
                                <div>
                                    {x.timestamp.toLocaleDateString()}
                                </div>
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
