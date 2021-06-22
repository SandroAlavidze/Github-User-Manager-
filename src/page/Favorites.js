import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Typography, Box } from "@material-ui/core";

import Favoriteuser from "../components/Favoriteuser";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";

function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <Box>
      <Header />
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h4">Favorites</Typography>
        <Box
          width={0.5}
          display="flex"
          marginTop="2em"
          margin="dense"
          justifyContent="space-around"
        >
          {favorites.map((user) => (
            <Favoriteuser key={uuidv4()} user={user} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Favorites;
