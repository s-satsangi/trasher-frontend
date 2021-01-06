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
import Map from "./MapsApi/Map"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  function logout() {
    fetch(`http://localhost:3000/logout`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setLoggedIn(false);
  }

  return (
    <Container>
      <h1>Litter-Ally</h1>
      <Router>
        {loggedIn ? <Redirect to="/home" /> : <Login login={setLoggedIn} />}
      </Router>
      {loggedIn ? (
        <Router>
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
            <Route path="/notifications">
              <Columns renderCenter={"/notifications"} />
            </Route>
            <Route path="/New_Post">
              <Columns renderCenter={<PostForm />} />
            </Route>
          </Switch>
        </Router>
      ) : null}
      <Map location={location} zoomLevel={10} />
    </Container>
  );
}

export default App;
