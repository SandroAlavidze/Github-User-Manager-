import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function FavoritesContext({ children }) {
  const [favorites, setFavorite] = useState([]);

  return (
    <AppContext.Provider value={{ favorites, setFavorite }}>
      {children}
    </AppContext.Provider>
  );
}

FavoritesContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, FavoritesContext };
