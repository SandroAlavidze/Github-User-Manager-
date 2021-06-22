import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ROUTE_DASHBOARD,
  ROUTE_FAVORITES,
  ROUTE_MAIN,
  ROUTE_SEARCH,
  ROUTE_SIGNUP,
  ROUTE_USER,
} from "./config/routes";
import Dashboard from "./page/Dashboard";
import Info from "./page/Info";
import Login from "./page/Login";
import Search from "./page/Search";
import Favorites from "./page/Favorites";
import Signup from "./page/Signup";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";

function Routes() {
  return (
    <Switch>
      <Route
        path={ROUTE_MAIN}
        exact
        render={(props) => (
          <GuestGuard>
            <Login {...props} />
          </GuestGuard>
        )}
      />
      <Route
        path={ROUTE_SIGNUP}
        render={() => (
          <GuestGuard>
            <Signup />
          </GuestGuard>
        )}
      />
      <Route
        path={ROUTE_DASHBOARD}
        render={() => (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        )}
      />
      <Route
        path={ROUTE_USER}
        render={() => (
          <AuthGuard>
            {" "}
            <Info />
          </AuthGuard>
        )}
      />
      <Route
        path={ROUTE_SEARCH}
        render={() => (
          <AuthGuard>
            {" "}
            <Search />
          </AuthGuard>
        )}
      />
      <Route
        path={ROUTE_FAVORITES}
        render={() => (
          <AuthGuard>
            {" "}
            <Favorites />
          </AuthGuard>
        )}
      />
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
