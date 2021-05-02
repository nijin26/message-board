import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import View from "./pages/View";
import Edit from "./pages/Edit";

import style from "./styles/App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
          <Route exact path="/:id">
            <View />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
