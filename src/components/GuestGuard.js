import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { ROUTE_DASHBOARD } from "../config/routes";

import { useAuth } from "../context/AuthContext";
function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to={ROUTE_DASHBOARD} />;
  }
  return <>{children}</>;
}

GuestGuard.propTypes = {
  children: PropTypes.object,
};

export default GuestGuard;
