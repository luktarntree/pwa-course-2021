import { Link } from 'react-router-dom';

function FriendList() {
    return (
        <>
            <div>Friend List</div>
            <Link to="/">
                <button>
                    Go Back
            </button>
            </Link>
        </>
    )
}
export default FriendList;