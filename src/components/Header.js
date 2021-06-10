import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ROUTE_DASHBOARD,
  ROUTE_SEARCH,
  ROUTE_FAVORITES,
  ROUTE_MAIN,
} from "../config/routes";

function Header() {
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
