import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../context/AppContext";

function Removeuser({ user }) {
  const { favorites, setFavorite } = useContext(AppContext);

  function removeFavorite() {
    setFavorite(favorites.filter((person) => person !== user));
  }

  return <button onClick={() => removeFavorite()}>Remove</button>;
}

Removeuser.propTypes = {
  user: PropTypes.string,
};

export default Removeuser;
