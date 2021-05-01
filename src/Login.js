import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';

const userRef = firebase.database().ref('user-ref');

function Login() {
    const [text, setText] = useState("");

    const onTextChange = (event) => {
        setText(event.target.value)
    };
    const saveLogin = (username) => {
        localStorage.setItem('username', username)
    }

    return (
        <div>
            <input type="text" value={text} placeholder="Type in your name" onChange={onTextChange} />
            <Link to="/chatbox">
                <button onClick={saveLogin(text)}>Start Chatting!</button>
            </Link>
        </div>
    )
}

export { Login };