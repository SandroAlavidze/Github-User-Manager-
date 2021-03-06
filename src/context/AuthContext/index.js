import React, { createContext, useReducer, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { initialState, reducer } from "./reducer";
import { signInUser } from "../../api/auth";
import { parseToken, toggleSession } from "../../utils/jwt";
import { authLogin, authLogout } from "./actions";
import { initializeAuthEffect } from "./effect";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(username, password) {
    const response = await signInUser(username, password);
    const { token } = response;
    toggleSession(token);
    const { payload } = parseToken(token);
    dispatch(authLogin(payload));
  }

  function logout() {
    toggleSession(null);
    dispatch(authLogout());
  }

  useEffect(() => {
    initializeAuthEffect(dispatch);
  }, []);

  if (!state.isInitialized) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error();
  }

  return context;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export { AuthContextProvider, useAuth };
