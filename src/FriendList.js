import { Link } from 'react-router-dom';
import App from './App';

function FriendList() {
    return (
        <App>
            <div>Friend List</div>
            <Link to="/">
                <button>
                    Go Back
            </button>
            </Link>
        </App>
    )
}
export default FriendList;