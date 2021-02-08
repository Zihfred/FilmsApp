import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./main/routes";
import MainLayout from "./library/common/Layout/MainLayout";

import './App.css'


function App() {
  return (
    <div className="App">
      <MainLayout>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.Component}
            />
          ))}
        </Switch>
      </Router>
      </MainLayout>
    </div>
  );
}

export default App;
