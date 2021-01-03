import "./App.css";
import Columns from "./containers/Columns";

import PostForm from "./components/PostForm";
import { Container } from "@material-ui/core";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  function logout() {
    fetch(`http://localhost:3000/logout`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then(console.log);
  }
  return (
    <Container>
      <h1>Litter-Ally</h1>
      <Login />
      <Router>
        <div>
          <Link to="/home">Text</Link>
        </div>
        <div>
          <button onClick={logout}>logout</button>
        </div>
        <div>
          <Link to="/another">Another Link</Link>
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
          <Route path="/notifications">
            <Columns renderCenter={"/notifications"} />
          </Route>
          <Route path="/New_Post">
            <PostForm />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
