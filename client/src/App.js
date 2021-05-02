import React from 'react';
import { HashRouter as Router, Switch } from "react-router-dom";
import { routes } from "./router/routePath";
import RouteWithSubRoutes from "./router/RouteWithSubRoutes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
