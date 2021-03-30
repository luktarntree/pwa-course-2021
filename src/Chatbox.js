import { useState, useEffect } from 'react';
import './Chatbox.css';
import App from './App';
import firebase from './firebaseConfig';
// import React, { useEffect, useState } from "react";

const chatroomRef = firebase.database().ref('chatroom-1');  // make chatroom folder in database

function Chatbox() {
    //Use State
    const [text, setText] = useState("");
    const [lines, setLines] = useState([]);

    //Use Effect
    useEffect(() => {
        //read
        chatroomRef.on('child_added', snapshot => {
            let x = snapshot.val();
            setLines(l => [...l, {
                sender: x.sender,
                message: x.message,
                timestamp: (new Date(x.timestamp))
            }])
        })
    }, []); //empty array = it will useEffect only once

    //Functions
    const onTextChange = (event) => {
        setText(event.target.value);
    };
    const onSend = () => {
        // setLines(lines => [...lines, {
        //     sender: "Me",
        //     message: text,
        //     timestamp: (new Date()),
        //     classname: "default"
        // }]);

        //push message to firebase server (write)
        chatroomRef.push({
            sender: "Me",
            message: text,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        })
        setText("");
    };
    const checkSender = (line) => {
        if (line.sender === "Me") {
            line.classname = "mine";
        }
    };

    const sendOnEnter = (e) => {
        if (e.key === 'Enter') {
            onSend();
        }
    };

    //Render
    return (
        <App>
            <div className="App-chatroom-container">
                <div className="App-chatroom">
                    {
                        lines.map(x => {
                            checkSender(x)
                            return <div className={"App-chatroom-text App-chatroom-text-" + x.classname}>
                                <div>
                                    {x.sender + ":"}
                                </div>
                                <div>
                                    {x.message}
                                </div>
                                <div>
                                    {x.timestamp.toLocaleDateString() + " " + x.timestamp.toLocaleTimeString()}
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
