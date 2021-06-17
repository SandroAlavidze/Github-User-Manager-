import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [favorites, setFavorite] = useState([]);

  return (
    <AppContext.Provider value={{ favorites, setFavorite }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppContextProvider };