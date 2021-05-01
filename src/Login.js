import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebaseConfig';

const userRef = firebase.database().ref('user-ref');

function Loginfunc() {
    const [text, setText] = useState("");

    const onTextChange = (event) => {
        setText(event.target.value)
    };
    const SaveLogin = () => { }

    return (
        <div>
            <input type="text" value={text} placeholder="Type in your name" onChange={onTextChange} />
            <Link to="/chatbox">
                <button onClick={SaveLogin}>Start Chatting!</button>
            </Link>
        </div>
    )
}

export default Loginfunc;