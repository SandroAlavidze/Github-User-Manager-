import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

function Addfavorites({ user }) {
  const { favorites, setFavorite } = useContext(AppContext);

  console.log(favorites);

  return (
    <button onClick={() => setFavorite((prev) => [...prev, user])}>
      Add to Favorites
    </button>
  );
}

Addfavorites.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Addfavorites;
