import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ROUTE_DASHBOARD,
  ROUTE_FAVORITES,
  ROUTE_MAIN,
  ROUTE_SEARCH,
  ROUTE_USER,
} from "./config/routes";
import Dashboard from "./page/Dashboard";
import Info from "./page/Info";

function Routes() {
  return (
    <Switch>
      <Route path={ROUTE_MAIN} exact>
        <h1>Login</h1>
      </Route>
      <Route path={ROUTE_DASHBOARD}>
        <Dashboard />
      </Route>
      <Route path={ROUTE_USER}>
        <Info />
      </Route>
      {/* <Route path={ROUTE_FAVORITES}>
                <Favorites />
            </Route>
            <Route path={ROUTE_SEARCH}>
                <Search />
            </Route> */}
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
