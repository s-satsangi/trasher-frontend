import "./App.css";
import Columns from "./containers/Columns";

import { Container, Grid } from "@material-ui/core";
import Login from "./components/login"

function App() {
  return (
    <Container>
      <Columns />
      <Login />
    </Container>
  );
}

export default App;
