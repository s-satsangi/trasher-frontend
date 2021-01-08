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

  // const location = {
  //   address: "1600 Amphitheatre Parkway, Mountain View, california.",
  //   lat: 37.42216,
  //   lng: -122.08427,
  // };

  function sessionUsername(username) {
    setUsername(username);
    window.sessionStorage.setItem("username", username);
  }

  function sessionUserId(id) {
    setUserId(id);
    window.sessionStorage.setItem("user_id", id);
  }

  return (
    <Router>
      <Container>
        <h1 className="logo">Litterally</h1>
        <h1 style={{ opacity: 0 }}>Litterally</h1> {/* block of spacing */}
        {loggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Login
            login={setLoggedIn}
            setUserId={setUserId}
            setUsername={sessionUsername}
            setUserId={sessionUserId}
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
      </Container>
    </Router>
  );
}

export default App;
