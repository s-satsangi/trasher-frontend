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
import Map from "./MapsApi/Map";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loggedIn") === "true" ? true : false
  );
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const [user_id, setUserId] = useState(sessionStorage.getItem("user_id"));

  const [path, setPath] = useState("");

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  function pathHandler(pathState) {
    setPath(pathState);
  }

  return (
    <Container>
      <h1 className="logo">Litterally</h1>
      <Router>
        {loggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Login
            login={setLoggedIn}
            setUserId={setUserId}
            setUsername={setUsername}
          />
        )}
        {loggedIn ? (
          <Switch>
            <Route path="/home">
              <Columns logIn={setLoggedIn} />
            </Route>
          </Switch>
        ) : null}
        {/* <Map location={location} zoomLevel={10} /> */}
      </Router>
    </Container>
  );
}

export default App;
