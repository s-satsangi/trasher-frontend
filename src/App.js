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
      <h1>Litterally</h1>
      <Router>
        {loggedIn ? (
          <Redirect to="/home/feed" />
        ) : (
          <Login login={setLoggedIn} />
        )}
      </Router>
      {loggedIn ? (
        <Router>
          <Switch>
            <Route path="/home/feed">
              <Columns logIn={setLoggedIn} />
            </Route>
          </Switch>
        </Router>
      ) : null}
      {/* <Map location={location} zoomLevel={10} /> */}
    </Container>
  );
}

export default App;
