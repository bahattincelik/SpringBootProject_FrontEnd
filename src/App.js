import React from "react";
import Header from "./components/Header";
import Kayit from "./components/Kayit";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          {/* <Listele /> */}
        </Route>
        <Route exact path="/ekle">
          <Kayit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
