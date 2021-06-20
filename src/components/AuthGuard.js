import React from "react";
import { Redirect } from "react-router";
import { ROUTE_MAIN } from "../config/routes";
import { useAuth } from "../context/AuthContext";

function AuthGuard({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Redirect to={ROUTE_MAIN} />
    }
    return <>{children}</>
}

export default AuthGuard;