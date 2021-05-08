import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [text, setText] = useState("");

    const onTextChange = (event) => {
        setText(event.target.value)
    };
    const saveLogin = () => {
        localStorage.setItem('username', text)
        localStorage.setItem('loggedin', 'true')
    };

    return (
        <div>
            <input type="text" value={text} placeholder="Type in your name" onChange={onTextChange} />
            <Link to="/chatbox">
                <button onClick={saveLogin}>Start Chatting!</button>
            </Link>
        </div>
    )
}

export { Login };