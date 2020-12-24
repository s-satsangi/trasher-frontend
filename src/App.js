import "./App.css";
import Columns from "./containers/Columns";

import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostForm from "./components/PostForm";

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
