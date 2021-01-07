import "./App.css";
import Columns from "./containers/Columns";
import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Login from "./components/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Map from "./MapsApi/Map";

function App() {
  useEffect(() => {
    setLoggedIn(window.sessionStorage.getItem("username") ? true : false);
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(false);
  const [user_id, setUserId] = useState(null);

  const [path, setPath] = useState("");

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  function pathHandler(pathState) {
    setPath(pathState);
  }

  function sessionStorage(username) {
    setUsername(username);
    window.sessionStorage.setItem("username", username);
  }

  return (
    <Container>
      <h1 className="logo">Litterally</h1>
      <h1 style={{ opacity: 0 }}>Litterally</h1>
      <Router>
        {loggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Login
            login={setLoggedIn}
            setUserId={setUserId}
            setUsername={sessionStorage}
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
