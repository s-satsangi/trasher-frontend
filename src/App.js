import "./App.css";
import Columns from "./containers/Columns";
import { useState } from "react";
import PostForm from "./components/PostForm";
import { Container } from "@material-ui/core";
import Login from "./components/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import UserForm from "./containers/UserForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function logout() {
    fetch(`http://localhost:3000/logout`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then(console.log);
    setLoggedIn(false);
  }
  return (
    <Container>
      <h1>Litter-Ally</h1>
      <Router>
        {loggedIn ? <Redirect to="/home" /> : <Login login={setLoggedIn} />}
        {/* <Link to="/newuser">Create User</Link> */}
        {loggedIn ? null : <UserForm />}
      </Router>
      {loggedIn ? (
        <Router>
          <div></div>
          <div>
            <Link to="/home">Text</Link>
          </div>
          <div>
            <button onClick={logout}>logout</button>
          </div>
          <div>
            <Link to="/New_Post">New Post</Link>
          </div>
          <div>
            <Link to="/notifications">Notifications</Link>
          </div>
          <Switch>
            <Route path="/home">
              <Columns />
            </Route>
            <Route path="/newuser">
              <Columns renderCenter={<UserForm />} />
            </Route>
            <Route path="/notifications">
              <Columns renderCenter={"/notifications"} />
            </Route>
            <Route path="/New_Post">
              <Columns renderCenter={<PostForm />} />
            </Route>
          </Switch>
        </Router>
      ) : null}
    </Container>
  );
}

export default App;
