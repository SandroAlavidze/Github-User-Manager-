import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import { AppContext } from "../context/AppContext";

function Removeuser({ user }) {
  const { favorites, setFavorite } = useContext(AppContext);

  function removeFavorite() {
    setFavorite(favorites.filter((person) => person !== user));
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => removeFavorite()}
    >
      Remove
    </Button>
  );
}

Removeuser.propTypes = {
  user: PropTypes.string,
};

export default Removeuser;
