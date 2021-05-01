// import router components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from './Profile';
import Login from './Login';

// create router component
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/chatbox">
                    <Chatbox />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;