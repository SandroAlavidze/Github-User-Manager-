import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

import {
  ROUTE_DASHBOARD,
  ROUTE_SEARCH,
  ROUTE_FAVORITES,
  ROUTE_MAIN,
} from "../config/routes";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { logout } = useAuth();

  return (
    <header>
      <Link to={ROUTE_MAIN}>
        <h1 className="logo-heading">GitHub App</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTE_DASHBOARD} activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_SEARCH} activeClassName="active">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_FAVORITES} activeClassName="active">
              Favorites
            </NavLink>
          </li>
          <li>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Log Out
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
