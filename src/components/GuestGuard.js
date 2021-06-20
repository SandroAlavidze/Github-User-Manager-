
import React from "react";
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

export default GuestGuard;