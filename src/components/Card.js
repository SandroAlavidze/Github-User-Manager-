import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";

import { getInfo } from "../api/detinfo";
import Showmore from "./Showmore";

function Card({ username }) {
  const [detaileddata, setDetdadta] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getInfo(username)
      .then((data) => setDetdadta(data))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <Box id="card">
      {error && <h1>{error}</h1>}
      <img className="resize" src={detaileddata.avatar_url} alt="avatar" />
      <Typography>
        {" "}
        <b>{detaileddata.login}</b>
      </Typography>
      <Typography>
        <span>Followers: </span> {detaileddata.followers}
      </Typography>
      <Typography>
        <span>Following: </span> {detaileddata.following}
      </Typography>
      <Showmore username={username} />
    </Box>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Card;
