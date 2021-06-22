import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

import { AppContext } from "../context/AppContext";
function Addfavorites({ user }) {
  const { setFavorite } = useContext(AppContext);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setFavorite((prev) => [...prev, user])}
    >
      Add to Favorites
    </Button>
  );
}

Addfavorites.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Addfavorites;
