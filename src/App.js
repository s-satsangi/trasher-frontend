import "./App.css";
import Columns from "./containers/Columns";

<<<<<<< HEAD
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostForm from "./components/PostForm";
=======
import { Container, Grid } from "@material-ui/core";
import Login from "./components/login"
>>>>>>> 1bb5e9bc849c5cf9723f524baafd5a3ee2a49805

function App() {
  return (
    <Container>
<<<<<<< HEAD
      <Router>
        <div>
          <Link to="/home">Text</Link>
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
=======
      <Columns />
      <Login />
>>>>>>> 1bb5e9bc849c5cf9723f524baafd5a3ee2a49805
    </Container>
  );
}

export default App;
